export default async (f: any) => {
  try {
    return [null, await f];
  } catch (err) {
    return [err, null];
  }
};
