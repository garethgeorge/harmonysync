export const stripWhiteSpace = (str: string) => {
  return str.replace(/\s+/g, " ").trim();
};

export const sleep = (timeMs) => {
  return new Promise((accept, _) => {
    setTimeout(accept, timeMs);
  });
};
