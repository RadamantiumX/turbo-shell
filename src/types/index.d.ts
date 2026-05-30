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
