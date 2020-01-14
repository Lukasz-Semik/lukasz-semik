import { useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from 'src/styles';

export const useRwdQuery = () => {
  const isMediaSm = useMediaQuery({ query: styles.breakpoints.xsUp });
  const isMediaMd = useMediaQuery({ query: styles.breakpoints.mdUp });
  const isMediaLg = useMediaQuery({ query: styles.breakpoints.lgUp });
  const isMediaXl = useMediaQuery({ query: styles.breakpoints.xlUp });

  return useMemo(
    () => ({
      isMediaXs: !isMediaSm,
      isMediaSm,
      isMediaMd,
      isMediaLg,
      isMediaXl,
    }),
    [isMediaSm, isMediaMd, isMediaLg, isMediaXl]
  );
};
