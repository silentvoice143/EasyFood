import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';

import AuthReducer from './reducer/auth';
import MenuReducer from './reducer/menu';
import RoleReducer from './reducer/role';
import loaderReducer from './reducer/loading';

const rootReducer = combineReducers({
  auth: AuthReducer,
  loader: loaderReducer,
  menu: MenuReducer,
  role: RoleReducer,
});

const persistConfig = {
  key: 'easyfood-app',
  storage: AsyncStorage,
  whiteList: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
