import {createAsyncThunk} from '@reduxjs/toolkit';
import {userApiEndpoint} from '../../../apis/userApi/config';
import userApi from '../../../apis/userApi';

export const signupStep1 = createAsyncThunk(
  `${userApiEndpoint.signupstep1Endpoint}Post`,
  async (payload: any) => {
    const res = await userApi.signupStep1(payload);
    return res;
  },
);
export const signupStep2 = createAsyncThunk(
  `${userApiEndpoint.signupstep2Endpoint}Post`,
  async (payload: any) => {
    const res = await userApi.signupStep2(payload);
    return res;
  },
);
export const signupStep3 = createAsyncThunk(
  `${userApiEndpoint.signupstep3Endpoint}Post`,
  async (payload: any) => {
    const res = await userApi.signupStep3(payload);
    return res;
  },
);
export const sendOtp = createAsyncThunk(
  `${userApiEndpoint.sendOtpEndpoint}Post`,
  async (payload: any) => {
    const res = await userApi.sendOtp(payload);
    return res;
  },
);
export const login = createAsyncThunk(
  `${userApiEndpoint.loginEndpoint}Post`,
  async (payload: any) => {
    const res = await userApi.login(payload);
    return res;
  },
);
