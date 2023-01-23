// eslint-disable-next-line no-unused-vars
export default function createIteratorObject(report) {
  const newArray = [];
  for (const array of Object.keys(report)) {
    newArray.push(array);
  }
  return newArray;
}
