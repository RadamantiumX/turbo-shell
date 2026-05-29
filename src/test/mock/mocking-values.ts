/**
 * Only for unit test
 */
export const mockInquirerReturn = {
  selectFolder: "api",
  selectPkgManager: "npm",
  inputPkg: "inquirer",
  depsConfirm: true,
  finishConfirm: true,
};

export const mockedOptions = {
  ws_folders: {
    message: "Select a workspace folder",
    choices: [
      {
        name: "api",
        value: "api",
        description: "mocked api folder",
      },
      {
        name: "client",
        value: "client",
        description: "mocked client folder",
      },
    ],
  },
};

export const mockStringData =
  '[{"name": "firstName", "path": "//path_1"}, {"name": "secondName", "path": "//path_2"}, {"name": "thirdName", "path": "//path_3"}]';

export const mockingCommandArgs = [
  {
    selectFolder: "web",
    selectPkgManager: "npm",
    inputPkg: "react",
    depsConfirm: true,
  },
  {
    selectFolder: "package",
    selectPkgManager: "pnpm",
    inputPkg: "tsup",
    depsConfirm: true,
  },
  {
    selectFolder: "api",
    selectPkgManager: "yarn",
    inputPkg: "inquirer",
    depsConfirm: true,
  },
];

export const mockCommandReturn = [
  {
    first: "npm i",
    second: "react",
    third: "--workspace=web -D",
  },
  {
    first: "pnpm add",
    second: "",
    third: "",
  },
  {
    first: "npm i",
    second: "",
    third: "",
  },
];
