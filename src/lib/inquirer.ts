import { select, confirm, input } from "@inquirer/prompts";
import options from "./options-choices";
import type { PromptValues } from "../types";
import { colorConsole } from "../console/colors";
import { PromptError } from "../common/errors";

/**
 * Takes the console prompts and return the answers
 * @returns {PromptValues | void} The values can be evaluates to any CLI
 */
export async function promptHandler(): Promise<PromptValues | void> {
  try {
    const selectFolder = await select(options.ws_folders);
    const selectPkgManager = await select(options.pkg_manager);
    const inputPkg = await input(options.pkg);
    const depsConfirm = await confirm(options.deps);
    const finishConfirm = await confirm(options.finish);
    if (!finishConfirm) {
      colorConsole("Installation cancelled", "exit");
      return;
    }
    return {
      selectFolder,
      selectPkgManager,
      inputPkg,
      depsConfirm,
      finishConfirm,
    };
  } catch (error) {
    throw new PromptError(`Unexpected error on console prompt: ${error}`);
  }
}
