import { parsedStreamData } from "../../common/parsed";
import { expect, test } from "vitest";
import { mockStringData } from "../mock/mocking-values";
import options from "../../lib/options-choices";

test("Should adding new values to empty array into object", () => {
  parsedStreamData(mockStringData);
  expect(options.ws_folders.choices.length).toBe(3);
});
