import "dotenv/config";
import { spawn } from "node:child_process";
import { optionsConfig } from "./options-spawn";
import { TR_CMD, ON_PROD } from "../constants";
import { SubProcessError, NodeChildProcessError } from "../common/errors";
import { mockNode } from "../test/mock/mocking-values";
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
    const cliSpawn = spawn(
      process.env.NODE_ENV !== ON_PROD ? mockNode : TR_CMD.ls,
      [TR_CMD.flag, TR_CMD.jq],

      optionsConfig,
    );

    cliSpawn.stderr?.on("error", (error) => {
      throw new NodeChildProcessError(`Error on Child Process: ${error}`);
    });

    return cliSpawn?.stdout;
  } catch (error) {
    throw new SubProcessError(`Error on Process: ${error}`);
  }
}

// See the next help: https://dev.to/wwayne/sending-data-between-nodejs-processes-337c

/**
 * With this function can be execute the installation of the package/s, with the selected package manager
 * Run inside of the stdout callback of the main Spawn Process *getWorkSpaceFolders()*
 * @param { string} command Current installation command from each package
 * @param { string } first_args Here must be the list or single package
 * @param { string } second_args Modifier, must be specfy the Workspace folder and type of dependency
 * @returns { void }
 */
export function exeStatementPrompt(
  command: string,
  first_args: string,
  second_args: string,
) {
  try {
    const cliSpawn = spawn(command, [first_args, second_args], optionsConfig);

    cliSpawn.stderr?.on("error", (error) => {
      throw new NodeChildProcessError(`Error on Child Process: ${error}`);
    });

    return cliSpawn.stdout;
  } catch (error) {
    throw new SubProcessError(`Error on Process: ${error}`);
  }
}
