export const getWindowHeight = () => {
  if (window) {
    return window.innerHeight;
  }

  return 880;
};
