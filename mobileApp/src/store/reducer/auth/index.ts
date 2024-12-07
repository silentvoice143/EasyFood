import {createSlice} from '@reduxjs/toolkit';
import {login, sendOtp, signupStep1, signupStep2, signupStep3} from './action';

const initialState = {
  active: null,
  email: '',
  userId: '',
  token: '',
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setInitialState: () => {
      return initialState;
    },
    logout: () => {
      return initialState;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(login.fulfilled, (state: any, {payload}: any) => {
      console.log('in store');
      const {status, data} = payload;

      if (status === 200) {
        return {
          ...state,
          token: data.token,
          email: data.email,
        };
      } else {
        return initialState;
      }
    });

    builder.addCase(signupStep1.fulfilled, (state: any, {payload}: any) => {
      console.log('in store');
      const {status, data} = payload;

      if (status === 200) {
        return {
          ...state,
          token: data.id_token,
          email: data.email,
        };
      } else {
        return initialState;
      }
    });

    builder.addCase(signupStep2.fulfilled, (state: any, {payload}: any) => {
      console.log('in store');
      const {status, data} = payload;

      if (status === 200) {
        return {
          ...state,
          token: data.id_token,
          email: data.email,
        };
      } else {
        return initialState;
      }
    });

    builder.addCase(signupStep3.fulfilled, (state: any, {payload}: any) => {
      console.log('in store');
      const {status, data} = payload;

      if (status === 200) {
        return {
          ...state,
          token: data.token,
          email: data.email,
        };
      } else {
        return initialState;
      }
    });

    builder.addCase(sendOtp.fulfilled, (state: any, {payload}: any) => {
      console.log('in store');
      const {status, data} = payload;

      if (status === 200) {
        return {
          ...state,
          token: data.id_token,
          email: data.email,
        };
      } else {
        return initialState;
      }
    });
  },
});

export const {setInitialState, logout} = AuthSlice.actions;

export {login, signupStep1, signupStep2, signupStep3, sendOtp};
export default AuthSlice.reducer;
