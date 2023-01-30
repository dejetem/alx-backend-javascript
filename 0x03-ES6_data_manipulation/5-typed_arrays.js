export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw Error('Position outside range');
  const newBuffer = new ArrayBuffer(length);
  const newView = new Int8Array(newBuffer);
  newView.set([value], position);
  return new DataView(newBuffer);
}
