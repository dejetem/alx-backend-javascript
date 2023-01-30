export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let x = 0;
  x += 1;
  if (x >= 5) {
    throw Error('Endpoint load is high');
  }
  weakMap.set(endpoint, x);
}
