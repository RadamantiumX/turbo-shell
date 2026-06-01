export interface PromptValues {
  selectFolder: string;
  selectPkgManager: string;
  inputPkg: string;
  depsConfirm: boolean;
  finishConfirm: boolean;
}

export type State = "success" | "loading" | "exit" | "error";

export type PackageManager = "npm install" | "pnpm add" | "yarn add";

export type Statement = {
  first?: string | undefined;
  second?: string | undefined;
  third?: string | undefined;
};

export type Choices = {
  name: string;
  value: string;
  description: string;
};

export type InquirerConfig = {
  ws_folders: {
    message: string;
    choices: Choices[];
  };
  pkg_manager: {
    message: string;
    choices: Choices[];
  };
  pkg: {
    message: string;
  };
  deps: {
    message: string;
  };
  finish: {
    message: string;
  };
};
