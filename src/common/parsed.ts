import options from "../lib/options-choices";

/**
 * Receive the raw data and parsed to push on inquirer options choices.
 * @param data String raw data comming from child process
 * @returns
 */
export function parsedStreamData(data: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  JSON.parse(data).map((item: any) => {
    options.ws_folders.choices.push({
      name: item?.name,
      value: item?.name,
      description: item?.path,
    });
  });
  return;
}
