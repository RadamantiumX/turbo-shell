export function parsedData(data) {
  const takenData = [];
  JSON.parse(data).map((item) => {
    takenData.push({});
  });

  return takenData;
}
