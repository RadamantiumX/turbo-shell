import colors from "ansi-colors";
import type { State } from "../types";
/**
 * Console Printer in fancy colors, depending of each case
 * @param {string} message Incoming from the parent, short and descriptive
 * @param {State} state Constrain only for 3 options
 * @returns {void}
 */

export function colorConsole(message: string, state: State): void {
  switch (state) {
    case "success":
      console.log(colors.bgGreen(message));
      break;
    case "loading":
      console.log(colors.bgYellow(message));
      break;
    case "exit":
      console.log(colors.bgMagenta(message));
      break;
    case "error":
      console.log(colors.bgRed(message));
      break;
    default:
      console.log(message);
  }
  return;
}
