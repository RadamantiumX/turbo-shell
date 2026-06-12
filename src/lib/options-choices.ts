/**
 * Inquirer/Prompt Config options
 */
import type { InquirerConfig } from "../types";
import { mockedOptions } from "../test/mock/mocking-values";

const options: InquirerConfig = {
  ws_folders: {
    message: "Select a workspace folder",
    choices: mockedOptions.ws_folders.choices,
  },
  pkg_manager: {
    message: "Select a package manager",
    choices: [
      {
        name: "npm",
        value: "npm",
        description: "Most popular and standard",
      },
      {
        name: "pnpm",
        value: "pnpm",
        description: "Fastest and huge storage",
      },
      {
        name: "yarn",
        value: "yarn",
        description: "Adding more perfomance",
      },
    ],
  },
  pkg: {
    message:
      "Enter the package/dependency name (spaces separation for multiples installations)",
  },
  deps: {
    message: "It's a DEV dependency?",
  },
  finish: {
    message: "Want to continue with the installation?",
  },
};

export default options;
