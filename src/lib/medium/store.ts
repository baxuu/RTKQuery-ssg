import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { mediumApi } from './mediumSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      [mediumApi.reducerPath]: mediumApi.reducer,
    },
    middleware: (gDM) => gDM().concat(mediumApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
