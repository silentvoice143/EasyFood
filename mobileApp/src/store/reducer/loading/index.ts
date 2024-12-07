import {createSlice} from '@reduxjs/toolkit';
import {login, sendOtp, signupStep1, signupStep2, signupStep3} from './action';

const initialState = {
  loading: false,
};

export const LoadingSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setInitialLoadingState: () => {
      return initialState;
    },
    setLoading: () => {
      return {loading: true};
    },
  },
});

export const {setInitialLoadingState, setLoading} = LoadingSlice.actions;

export default LoadingSlice.reducer;
