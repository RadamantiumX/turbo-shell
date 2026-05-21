import { spawn } from "node:child_process";
import { colorConsole } from "../console/colors";
import type { PackagesManager } from "../types";
import { optionsCofig } from "./spawn-options";

/**
 * Main Child Process: Execute the turbo-repo CLI to get workspaces folders names
 *  --> The "spawn" options can be edited if is needed
 *  --> The returned Stream can be used to add the Prompt options
 *  --> The core functions of this project must be the callback of the exit code "stdout"
 * @returns { ChildProcess | null } Returns the stream code exit
 */
export function getWorkSpaceFolders() {
  try {
    const cliSpawn = spawn(
      "turbo ls",
      ["--output=json", `| jq -r ".packages.items"`],
      optionsCofig,
    );

    cliSpawn.stderr?.on("error", (error) => {
      colorConsole(`Initial process crashed: ${error}`, "error");
      return;
    });

    return cliSpawn.stdout;
  } catch (error) {
    colorConsole(`Unexpected error appears: ${error}`, "error");
    throw new Error(`Error on: ${error}`);
  }
}

// See the next help: https://dev.to/wwayne/sending-data-between-nodejs-processes-337c
export function onFinishPrompts(
  command: PackagesManager,
  args: string,
  flags: string,
) {
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
