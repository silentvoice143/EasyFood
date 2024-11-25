import axios from 'axios';

let injected_store: any;

export const injectStore = (_store: any) => {
  injected_store = _store;
};

const defaultTimeout = 40000;

const handleRequest = (config: any) => {
  const accessToken = injected_store.getState().auth.token;
  const addToken = false;

  if (addToken) {
    return {
      ...config,
      headers: {
        ...config.headers,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    };
  } else {
    return {
      ...config,
      headers: {
        'Content-Type': 'application/json',
        ...config.headers,
      },
    };
  }
};

const handleResponse = (response: any) => {
  // Handle successful responses here
  console.log('Response:', response);
  return response;
};

const handleError = (error: any) => {
  // Handle errors here
  console.error('Error:', error);
  return Promise.reject(error);
};

const createApiInstance = (baseURL: string, name: string = '') => {
  const api = axios.create({
    baseURL,
    timeout: defaultTimeout,
  });

  if (!baseURL) {
    throw new Error(
      `${name} baseURL not set during build. Please, set baseURL`,
    );
  }

  api.interceptors.request.use(handleRequest);

  api.interceptors.response.use(handleResponse, handleError);

  return {
    instance: api,
  };
};

export default createApiInstance;
