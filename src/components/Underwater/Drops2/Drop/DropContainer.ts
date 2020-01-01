import { useWindow } from 'src/hooks/useWindow';

export const DropContainer = ({ render }) => {
  const { isBrowser, windowHeight, windowWidth } = useWindow();

  return isBrowser
    ? render({
        windowHeight,
        windowWidth,
      })
    : null;
};
