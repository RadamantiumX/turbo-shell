/**
 * Object --> Turborepo ls command --> list WS folders
 * See docs: https://turborepo.dev/docs/reference/ls
 */
export const TR_CMD = {
  ls: "turbo ls",
  flag: "--output=json",
  jq: `| jq -r ".packages.items"`,
};

export const ON_TEST = "viper-test";
