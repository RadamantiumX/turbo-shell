export interface PromptValues {
  selectFolder: string | unknown;
  selectPkgManager: string | unknown;
  inputPkg: string;
  depsConfirm: boolean;
  finishConfirm: boolean;
}

export type State = "success" | "loading" | "exit" | "error";

export type PackageManager = "npm install" | "pnpm add" | "yarn add";
