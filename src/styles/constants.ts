// TODO: clean this place, values left as reference.
// const screenUsMin = 0;
// const screenUsMax = 479;
export const screenXsMin = 480;
// const screenXsMax = 767;
export const screenSmMin = 768;
// const screenSmMax = 1023;
export const screenMdMin = 1024;
// const screenMdMax = 1279;
export const screenLgMin = 1280;
// const screenLgMax = 1479;
export const screenXlMin = 1480;

export const breakpoints = {
  xsUp: `(min-width: ${screenXsMin}px)`,
  smUp: `(min-width: ${screenSmMin}px)`,
  mdUp: `(min-width: ${screenMdMin}px)`,
  lgUp: `(min-width: ${screenLgMin}px)`,
  xlUp: `(min-width: ${screenXlMin}px)`,
};

export type Breakpoints = typeof breakpoints;
