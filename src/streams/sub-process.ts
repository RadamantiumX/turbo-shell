import { spawn } from "node:child_process";
import { colorConsole } from "../console/colors";
import type { PackageManager } from "../types";
import { optionsCofig } from "./spawn-options";
import { TR_CMD } from "../constants";
import type Stream from "node:stream";

/**
 * <<Main>> Child Process: Execute the turbo-repo CLI to get workspaces folders names
 *  --> The "spawn" options can be edited if is needed
 *  --> The returned Stream can be used to add the Prompt options
 *  --> The core functions of this project must be the callback of the exit code "stdout"
 * @returns {  Stream.Readable | null } Returns the stream code exit
 */
export function getWorkSpaceFolders(): Stream.Readable | null {
  try {
    const cliSpawn = spawn(TR_CMD.ls, [TR_CMD.flag, TR_CMD.jq], optionsCofig);

    cliSpawn.stderr?.on("error", (error) => {
      colorConsole(`Initial process crashed: ${error}`, "error");
      return;
    });

    return cliSpawn?.stdout;
  } catch (error) {
    colorConsole(`Unexpected error appears: ${error}`, "error");
    throw new Error(`Error on: ${error}`);
  }
}

// See the next help: https://dev.to/wwayne/sending-data-between-nodejs-processes-337c

/**
 * With this function can be execute the installation of the package/s, with the selected package manager
 * Run inside of the stdout callback of the main Spawn Process *getWorkSpaceFolders()*
 * @param { PackageManager } command Current installation command from each package
 * @param { string } args Here must be the list or single package
 * @param { string } flags Modifier, must be specfy the Workspace folder and type of dependency
 * @returns { void }
 */
export function onFinishPrompts(
  command: PackageManager,
  args: string,
  flags: string,
): void {
  try {
    const cliSpawn = spawn(command, [args, flags], optionsCofig);

    cliSpawn.stderr?.on("error", (error) => {
      colorConsole(`Error on child process: ${error}`, "error");
      return;
    });

    cliSpawn.on("exit", () => {
      colorConsole("The process succesfuly finish", "success");
    });

    return;
  } catch (error) {
    colorConsole(`Unexpected error appears: ${error}`, "error");
    throw new Error(`Error on: ${error}`);
  }
}
