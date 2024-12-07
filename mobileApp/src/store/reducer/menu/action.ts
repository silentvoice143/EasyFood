import {createAsyncThunk} from '@reduxjs/toolkit';
import {menuApiEndpoint} from '../../../apis/menuApi/config';
import menuApi from '../../../apis/menuApi';

export const createMenuItem = createAsyncThunk(
  `${menuApiEndpoint.menuEndpoint}Post`,
  async (payload: any) => {
    const res = await menuApi.createMenuitem(payload);
    return res;
  },
);
export const getAllMenuItems = createAsyncThunk(
  `${menuApiEndpoint.menuEndpoint}Get`,
  async () => {
    const res = await menuApi.getAllMenuitems();
    return res;
  },
);
export const getUserMenuItems = createAsyncThunk(
  `${menuApiEndpoint.menuEndpoint}Get`,
  async () => {
    const res = await menuApi.getUserMenuitems();
    return res;
  },
);
export const getMenuitemById = createAsyncThunk(
  `${menuApiEndpoint.menuEndpoint}Get`,
  async (payload: any) => {
    const res = await menuApi.getMenuitemById(payload);
    return res;
  },
);
export const editMenuItem = createAsyncThunk(
  `${menuApiEndpoint.menuEndpoint}Put`,
  async (payload: any) => {
    const res = await menuApi.editMenuitem(payload);
    return res;
  },
);
export const deleteMenuItem = createAsyncThunk(
  `${menuApiEndpoint.menuEndpoint}Delete`,
  async (payload: any) => {
    const res = await menuApi.deleteMenuitem(payload);
    return res;
  },
);
