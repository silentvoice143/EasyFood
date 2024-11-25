export interface AuthConfig {
  signupstep1Endpoint: string;
  signupstep2Endpoint: string;
  signupstep3Endpoint: string;
  sendOtpEndpoint: string;
  loginEndpoint: string;
}

export const userApiEndpoint: AuthConfig = {
  signupstep1Endpoint: '/api/auth/signup/step1',
  signupstep2Endpoint: '/api/auth/signup/step2',
  signupstep3Endpoint: '/api/auth/signup/step3',
  sendOtpEndpoint: '/api/auth/signup/sendOtp',
  loginEndpoint: '/api/auth/login',
};
