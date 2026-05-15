export function colorConsole(message: string, state: string) {
  switch (state) {
    case "success":
      console.log(message);
      break;
    case "load":
      console.log(message);
      break;
    case "exit":
      console.log(message);
      break;
    case "error":
      console.log(message);
  }
  return;
}
