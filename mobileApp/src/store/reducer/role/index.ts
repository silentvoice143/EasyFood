import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isVendor: false,
  isAdmin: false,
};

export const RoleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setInitialState: () => {
      return initialState;
    },
    setVendorRole: prev => {
      return {
        ...prev,
        isVendor: true,
      };
    },
    setCustomerRole: prev => {
      return {
        ...prev,
        isVendor: false,
      };
    },
    setAdminRole: prev => {
      return {
        ...prev,
        isAdmin: true,
      };
    },
  },
});

export const {setInitialState, setAdminRole, setCustomerRole, setVendorRole} =
  RoleSlice.actions;

export default RoleSlice.reducer;
