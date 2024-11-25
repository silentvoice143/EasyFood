import {AxiosError, AxiosResponse} from 'axios';
import api from '../api'; // Adjust the import path as necessary
import {userApiEndpoint} from './config';

const userApi = {
  async signupStep1(payload: any) {
    return await api.post(`${userApiEndpoint.signupstep1Endpoint}`, payload);
  },
  async signupStep2(payload: any) {
    return await api.post(`${userApiEndpoint.signupstep2Endpoint}`, payload);
  },
  async signupStep3(payload: any) {
    return await api.post(`${userApiEndpoint.signupstep3Endpoint}`, payload);
  },
  async sendOtp(payload: any) {
    return await api.post(`${userApiEndpoint.sendOtpEndpoint}`, payload);
  },
  async login(payload: any) {
    console.log(payload, '---calling api');
    return await api.post(`${userApiEndpoint.loginEndpoint}`, payload);
  },
};

export default userApi;
