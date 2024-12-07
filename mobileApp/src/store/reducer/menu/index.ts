import {createSlice} from '@reduxjs/toolkit';
import {
  createMenuItem,
  deleteMenuItem,
  editMenuItem,
  getAllMenuItems,
  getMenuitemById,
  getUserMenuItems,
} from './action';

const initialState = {
  isOpen: false,
  modalType: '',
  itemId: '',
};

export const MenuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuInitialState: () => {
      return initialState;
    },
    setMenuModaltoggle: (prev, action) => {
      return {
        isOpen: true,
        modalType: action.payload.type,
        itemId: action.payload.id,
      };
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(createMenuItem.fulfilled, (state: any, {payload}: any) => {
      return state;
    });

    builder.addCase(getAllMenuItems.fulfilled, (state: any, {payload}: any) => {
      return state;
    });
    builder.addCase(getMenuitemById.fulfilled, (state: any, {payload}: any) => {
      return state;
    });
    builder.addCase(
      getUserMenuItems.fulfilled,
      (state: any, {payload}: any) => {
        return state;
      },
    );

    builder.addCase(editMenuItem.fulfilled, (state: any, {payload}: any) => {
      return state;
    });

    builder.addCase(deleteMenuItem.fulfilled, (state: any, {payload}: any) => {
      return state;
    });
  },
});

export const {setMenuInitialState, setMenuModaltoggle} = MenuSlice.actions;

export {
  createMenuItem,
  getAllMenuItems,
  getUserMenuItems,
  getMenuitemById,
  editMenuItem,
  deleteMenuItem,
};
export default MenuSlice.reducer;
