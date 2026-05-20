import { spawn } from "node:child_process";
import { colorConsole } from "../console/colors";

export function getWorkSpaceFolders() {
  try {
    const cliSpawn = spawn("command", ["args", "flags"], {
      stdio: ["pipe"],
      shell: true,
    });

    console.log(cliSpawn);
  } catch (error) {
    colorConsole(`Unexpected error appears: ${error}`, "error");
    throw new Error(`Error on: ${error}`);
  }
}

// See the next help: https://dev.to/wwayne/sending-data-between-nodejs-processes-337c
export function onFinishPrompts(command: string, args: string, flags: string) {
  try {
    const cliSpawn = spawn(command, [args, flags], {
      stdio: ["pipe"],
      shell: true,
    });

    cliSpawn.stderr.on("error", (error) => {
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
