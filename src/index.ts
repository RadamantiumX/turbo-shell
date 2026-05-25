/* eslint-disable @typescript-eslint/no-explicit-any */
import { getWorkSpaceFolders } from "./streams/sub-process";
import { colorConsole } from "./console/colors";

const turbo = getWorkSpaceFolders();

turbo?.on("data", wsMainInterface);

export async function wsMainInterface(data: any) {
  try {
    console.log(data);
  } catch (error) {
    colorConsole(`${error}`, "error");
  }
}
