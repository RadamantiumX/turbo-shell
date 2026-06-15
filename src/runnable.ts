/* eslint-disable @typescript-eslint/no-explicit-any */
import "dotenv/config";
import { getWorkSpaceFolders, exeStatementPrompt } from "./streams/sub-process";
import { colorConsole } from "./console/colors";
import { parsedStreamData } from "./common/parsed";
import { promptHandler } from "./lib/inquirer";
import { commandAssembly } from "./common/command";
import type { PromptValues } from "./types/index";

// See this before publish: https://www.geeksforgeeks.org/node-js/npm-pack-command/
// Execute from package.json: https://www.google.com/search?q=run+my+own+package+directly+in+package.json+script+like+lint+or+vitest+for+example&oq=run+my+own+package+directly+in+package.json+script+like+lint+or+vitest+for+example&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCTMyNzAyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8

// Using the main child event process
export const turbo = getWorkSpaceFolders();

// The listerner only takes the values returned from the cli turbo ls
turbo?.on("data", monoRepoPackageManager);

/**
 * This callback will run when the listener receive the "data" event, another child event is triggered
 * @param {any} data Comming from the "stdout" of the main process to adding on choices
 * @returns {Promise<void>}
 */
export async function monoRepoPackageManager(data: any): Promise<void> {
  try {
    // Takes the incoming data to parsing and pushing on choices
    parsedStreamData(data);

    // The destructuring values comming from inquirer
    const {
      selectFolder,
      selectPkgManager,
      inputPkg,
      depsConfirm,
      finishConfirm,
    } = (await promptHandler()) as PromptValues;
    if (!finishConfirm) {
      colorConsole("Exit from the assistant 👋", "exit");
      return;
    }

    const cmdStatment = commandAssembly(
      selectFolder,
      selectPkgManager,
      inputPkg,
      depsConfirm,
    );

    // Inner child event
    const finalStmt = exeStatementPrompt(
      cmdStatment?.first as string,
      cmdStatment.second as string,
      cmdStatment.third as string,
    );

    finalStmt?.on("end", () => {
      colorConsole("Success on Installation", "success");
    });

    return;
  } catch (error: string | undefined | any) {
    if (error.toString().includes("ExitPromptError")) {
      colorConsole("Bye bye 👋", "exit");
      return;
    }
    colorConsole(`${error}`, "error");
    return;
  }
}
