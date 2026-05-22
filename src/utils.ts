export function parsedStreamData(data: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parsedData: any = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  JSON.parse(data).map((item: any) => {
    parsedData.push({
      name: item.name,
      value: item.name,
      description: item.path,
    });
  });
  return parsedData;
}
