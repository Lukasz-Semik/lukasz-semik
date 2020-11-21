import axios from 'axios';

const baseURL = 'https://lukasz-semik-back.herokuapp.com';

export const api = axios.create({
  responseType: 'json',
  baseURL,
});

const createRecord = (value: number) =>
  api.post('/create-record', {
    value,
  });

const wakeUp = () => api.get('/wake-up');

interface SendEmailPostOptions {
  email: string;
  content: string;
}

const sendEmail = (values: SendEmailPostOptions) =>
  api.post('/send-email', values);

export const appApi = {
  createRecord,
  wakeUp,
  sendEmail,
};
