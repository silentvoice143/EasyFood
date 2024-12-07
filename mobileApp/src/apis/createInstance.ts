import axios from 'axios';
import {Screen} from 'react-native-screens';
import {logout} from '../store/reducer/auth';

let injected_store: any;
let injected_navigation: any;

export const injectStore = (_store: any) => {
  injected_store = _store;
};
export const injectNavigate = (_navigate: any) => {
  injected_navigation = _navigate;
};

const defaultTimeout = 40000;

const handleRequest = (config: any) => {
  const accessToken = injected_store.getState().auth.token;
  const noTokenEndPoint = ['/api/auth/login'];
  const addToken = !noTokenEndPoint.includes(config.url);
  // console.log(
  //   accessToken,
  //   addToken,
  //   config.url,
  //   'token added-------------------',
  // );

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
  const {status, data} = response;

  switch (status) {
    case 200:
      console.log('Success:', data);
      break;
    case 201:
      console.log('Created:', data);
      break;
    case 204:
      console.log('No Content');
      break;
    default:
      console.warn('Unhandled status code:', status);
  }

  return response;
};

const handleError = (error: any) => {
  if (error.response) {
    const {status, data} = error.response;
    switch (status) {
      case 400:
        // console.error('Bad Request:', data);
        break;
      case 401:
        console.error('Unauthorized:', data);
        injected_store.dispatch(logout());
        injected_navigation.navigate('vendorRoute', {Screen: 'login'});
        break;
      case 403:
        console.error('Forbidden:', data);
        break;
      case 404:
        console.error('Not Found:', data);
        break;
      case 500:
        console.error('Internal Server Error:', data);
        break;
      default:
        console.error('Unhandled error status code:', status, data);
    }
  } else if (error.request) {
    console.error('Network error:', error.message);
  } else {
    console.error('Error:', error.message);
  }

  return error;
};

const createApiInstance = (baseURL: string, name = '') => {
  if (!baseURL) {
    throw new Error(
      `${name} baseURL not set during build. Please, set baseURL`,
    );
  }

  const api = axios.create({
    baseURL,
    timeout: defaultTimeout,
  });

  api.interceptors.request.use(handleRequest);
  api.interceptors.response.use(handleResponse, handleError);

  return {
    instance: api,
  };
};

export default createApiInstance;
