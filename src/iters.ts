export async function asyncForEach<T>(
  arr: Array<T>,
  handler: (el: T, idx?: number) => null
): Promise<void> {
  for (let i = 0; i < arr.length; i++) {
    await Promise.resolve(handler(arr[i], i));
  }
}

export async function asyncMap<T, S>(
  arr: Array<T>,
  handler: (el: T, idx?: number) => S
): Promise<Array<S>> {
  return Promise.all<S>(arr.map(handler));
}

export async function asyncFilter<T>(
  arr: Array<T>,
  predicate: (el: T, idx?: number) => Promise<boolean> | boolean
): Promise<Array<T>> {
  const results = await Promise.all<boolean>(arr.map(predicate));
  return arr.filter((_v, index) => results[index]);
}

export async function asyncFind<T>(
  arr: Array<T>,
  predicate: (el: T, idx?: number) => Promise<boolean> | boolean
): Promise<T | undefined> {
  for (let i = 0; i < arr.length; i++) {
    const match = await Promise.resolve(predicate(arr[i], i));
    if (match) return arr[i];
  }
}
