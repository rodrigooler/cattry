export default async (f: () => {}) => {
  try {
    return [null, await f()]
  } catch (err) {
    return [err, null]
  }
}