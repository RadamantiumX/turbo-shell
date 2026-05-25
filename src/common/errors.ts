export class SubProcessError extends Error {
  override name = "SubProcessError";
}

export class PromptError extends Error {
  override name = "PromptError";
}

export class ConsoleError extends Error {
  override name = "ConsoleError";
}

export class NodeChildProcessError extends Error {
  override name = "NodeChildProcessError";
}
