/* eslint-disable @typescript-eslint/no-explicit-any */
import { getWorkSpaceFolders, exeStatementPrompt } from "./streams/sub-process";
import { colorConsole } from "./console/colors";
import { parsedStreamData } from "./common/parsed";
import { promptHandler } from "./lib/inquirer";
import { commandAssembly } from "./common/command";
import type { PromptValues } from "./types/index";

const turbo = getWorkSpaceFolders();

turbo?.on("data", wsMainInterface);

export async function wsMainInterface(data: any) {
  try {
    parsedStreamData(data);
    const {
      selectFolder,
      selectPkgManager,
      inputPkg,
      depsConfirm,
      finishConfirm,
    } = (await promptHandler()) as PromptValues;
    if (!finishConfirm) {
      colorConsole("Exit from the assistant", "exit");
      return;
    }
    const cmdStatment = commandAssembly(
      selectFolder,
      selectPkgManager,
      inputPkg,
      depsConfirm,
    );

    exeStatementPrompt(
      cmdStatment?.first as string,
      cmdStatment.second as string,
      cmdStatment.third as string,
    );

    return;
  } catch (error) {
    colorConsole(`${error}`, "error");
    return;
  }
}
