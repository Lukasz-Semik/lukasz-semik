import axios from 'axios';

const baseURL =
  process.env.PROCESS_ENV === 'production'
    ? 'https://family-dashboard-be.herokuapp.com'
    : 'http://localhost:3000';

export const api = axios.create({
  responseType: 'json',
  baseURL,
});
