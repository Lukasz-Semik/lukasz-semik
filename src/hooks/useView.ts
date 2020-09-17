import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { setAppFutureView, setAppView } from 'src/store/view/actions';
import {
  useGetAppFutureView,
  useGetIsViewMounted,
} from 'src/store/view/selectors';
import { View } from 'src/store/view/types';

export const useView = () => {
  const dispatch = useDispatch();
  const futureView = useGetAppFutureView();

  const goUp = useCallback(() => {
    dispatch(setAppFutureView(View.Surface));
  }, [dispatch]);

  const goDown = useCallback(() => {
    dispatch(setAppFutureView(View.Underwater));
  }, [dispatch]);

  const setView = useCallback(() => {
    dispatch(setAppView(futureView));
  }, [dispatch, futureView]);

  const isUnderwaterViewMounted = useGetIsViewMounted(View.Underwater);
  const isSurfaceViewMounted = useGetIsViewMounted(View.Surface);

  return {
    futureView,
    goUp,
    goDown,
    setView,
    isUnderwaterViewMounted,
    isSurfaceViewMounted,
  };
};
