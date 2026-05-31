import { it, describe, expectTypeOf } from "vitest";
import { getWorkSpaceFolders } from "../../streams/sub-process";
import Stream from "node:stream";

describe("getWorkSpaceFolders", () => {
  it("should return stream readeable", () => {
    expectTypeOf(getWorkSpaceFolders()).toEqualTypeOf<Stream.Readable | null>();
  });
});
