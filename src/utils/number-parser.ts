export const numberParser = (s: string) => {
  const n = Number.parseInt(s);
  if (isNaN(n)) {
    return 0;
  }
  return n;
};
