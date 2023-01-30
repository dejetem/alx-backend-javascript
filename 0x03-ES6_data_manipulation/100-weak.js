let x = 0;
export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  x += 1;
  if (x >= 5) {
    throw Error('Endpoint load is high');
  }
  weakMap.set(endpoint, x);
}
