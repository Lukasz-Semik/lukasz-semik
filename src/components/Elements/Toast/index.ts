import { toast, ToastOptions } from 'react-toastify';

import { appContent } from 'src/constants/content';

export const notifySuccess = (
  msg: React.ReactNode,
  config: ToastOptions = {}
) => {
  toast(msg, {
    ...config,
    type: 'success',
  });
};

export const notifyError = (
  msg: React.ReactNode = appContent.shared.smthWrong(),
  config: ToastOptions = {}
) => {
  toast(msg, {
    ...config,
    type: 'error',
  });
};
