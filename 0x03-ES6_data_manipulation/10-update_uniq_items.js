export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw Error('Cannot process');
  }
  for (const [a, b] of map) {
    if (b === 1) {
      map.set(a, 100);
    }
  }
  return map;
}
