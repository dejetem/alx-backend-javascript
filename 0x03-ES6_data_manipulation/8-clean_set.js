export default function cleanSet(set, startString) {
  const array = [];
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  for (const prop of set) {
    if ((typeof prop === 'string') && (prop.startsWith(startString))) {
      array.push(prop.slice(startString.length));
    }
  }
  return array.join('-');
}
