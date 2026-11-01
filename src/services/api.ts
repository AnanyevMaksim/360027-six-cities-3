import axios, { AxiosInstance } from 'axios';
import { getToken } from './token';

const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;
const TOKEN_HEADER_NAME = 'X-Token';

export function createAPI(): AxiosInstance {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token) {
      config.headers[TOKEN_HEADER_NAME] = token;
    }

    return config;
  });

  return api;
}
