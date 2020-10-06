import { useCallback, useState } from 'react';
import { chunk } from 'lodash';

export function usePagination<T>(items: T[]) {
  const chunks = chunk(items, 4);
  const maxChunkIndex = chunks.length - 1;
  const [currentChunkIndex, setCurrentChunkIndex] = useState(0);

  const goNext = useCallback(() => {
    if (currentChunkIndex === maxChunkIndex) {
      return setCurrentChunkIndex(0);
    }

    return setCurrentChunkIndex(prevIndex => prevIndex + 1);
  }, [currentChunkIndex, maxChunkIndex]);

  const goPrevious = useCallback(() => {
    if (currentChunkIndex === 0) {
      return setCurrentChunkIndex(maxChunkIndex);
    }

    return setCurrentChunkIndex(prevIndex => prevIndex - 1);
  }, [currentChunkIndex, maxChunkIndex]);

  return {
    currentChunkIndex,
    chunk: chunks[currentChunkIndex],
    goNext,
    goPrevious,
  };
}
