import "dotenv/config";
import { select, confirm, input } from "@inquirer/prompts";
import options from "./options-choices";
import { mockedOptions } from "../test/mock/mocking-values";
import { PromptError } from "../common/errors";
import { ON_TEST } from "../constants";
import type { PromptValues } from "../types";

/**
 * Takes the console prompts and return the answers
 * @returns {PromptValues | unknown} The values can be evaluates to any CLI
 */
export async function promptHandler(): Promise<PromptValues | unknown> {
  try {
    // Only if the TEST is running --> "mockedOptions" contains a mocked values
    // "options.ws_folders" ==> []
    const selectFolder = await select(
      process.env.NODE_ENV === ON_TEST
        ? mockedOptions.ws_folders
        : options.ws_folders,
    );
    const selectPkgManager = await select(options.pkg_manager);
    const inputPkg = await input(options.pkg);
    const depsConfirm = await confirm(options.deps);
    const finishConfirm = await confirm(options.finish);

    return {
      selectFolder,
      selectPkgManager,
      inputPkg,
      depsConfirm,
      finishConfirm,
    };
  } catch (error) {
    throw new PromptError(`${error}`);
  }
}
