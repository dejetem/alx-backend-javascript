export default function iterateThroughObject(reportWithIterator) {
  const newArray = [];
  for (const array of reportWithIterator) {
    newArray.push(array);
  }
  return newArray.join('|');
}
