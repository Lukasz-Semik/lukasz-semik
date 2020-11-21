import { api } from '../index';

const create = (value: number) =>
  api.post('/create-record', {
    value,
  });

export const recordsApi = {
  create,
};
