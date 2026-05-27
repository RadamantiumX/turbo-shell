import { it, vi, describe, expect } from "vitest";
import { promptHandler } from "../../lib/inquirer";
import { select, input, confirm } from "@inquirer/prompts";
import { mockInquirerReturn } from "../mock/mocking-values";
import options from "../../lib/options-choices";
import { mockedOptions } from "../mock/mocking-values";
// Mocking the @inquirer/prompts used methods
vi.mock("@inquirer/prompts", () => ({
  select: vi.fn(),
  input: vi.fn(),
  confirm: vi.fn(),
}));

describe("promptHandler", () => {
  it("should proccess correctly the line user interface", async () => {
    // Mocked the currents values
    vi.mocked(select).mockResolvedValueOnce("api");
    vi.mocked(select).mockResolvedValueOnce("npm");
    vi.mocked(input).mockResolvedValue("inquirer");
    vi.mocked(confirm).mockResolvedValue(true);
    vi.mocked(confirm).mockResolvedValue(true);

    // To evaluate
    const result = await promptHandler();

    // Expected with each used methods
    expect(select).toHaveBeenCalledWith(
      expect.objectContaining(mockedOptions.ws_folders),
    );
    expect(select).toHaveBeenCalledWith(
      expect.objectContaining(options.pkg_manager),
    );
    expect(input).toHaveBeenCalledWith(expect.objectContaining(options.pkg));
    expect(confirm).toHaveBeenCalledWith(expect.objectContaining(options.deps));
    expect(confirm).toHaveBeenCalledWith(
      expect.objectContaining(options.finish),
    );

    expect(result).toStrictEqual(mockInquirerReturn);
  });
});
