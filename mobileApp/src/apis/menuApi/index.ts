import {AxiosError, AxiosResponse} from 'axios';
import api from '../api'; // Adjust the import path as necessary
import {menuApiEndpoint} from './config';

const menuApi = {
  async getUserMenuitems() {
    return await api.get(`${menuApiEndpoint.menuEndpoint}/vendor`);
  },
  async getMenuitemById(payload: any) {
    return await api.get(
      `${menuApiEndpoint.menuEndpoint}${payload && `/${payload}`}`,
    );
  },
  async getAllMenuitems() {
    return await api.get(`${menuApiEndpoint.menuEndpoint}/customer`);
  },
  async createMenuitem(payload: any) {
    return await api.post(`${menuApiEndpoint.menuEndpoint}`, payload);
  },
  async editMenuitem(payload: any) {
    return await api.put(
      `${menuApiEndpoint.menuEndpoint + '/' + payload.id}`,
      payload.data,
    );
  },
  async deleteMenuitem(payload: any) {
    return await api.delete(`${menuApiEndpoint.menuEndpoint + '/' + payload}`);
  },
};

export default menuApi;
