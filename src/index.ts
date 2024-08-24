export function gehSync<T>(fn: () => T): [T | null, unknown | null] {
  try {
    return [fn(), null]
  } catch (e: unknown) {
    return [null, e]
  }
}

export async function gehAsync<T>(
  fn: () => Promise<T>
): Promise<readonly [T | null, unknown | null]> {
  try {
    return [await fn(), null]
  } catch (e: unknown) {
    return [null, e]
  }
}
