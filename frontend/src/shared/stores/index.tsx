import { configureStore } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';
import appSlice from './appSlice';
import persistedProductSlice from './productSlice';

enableMapSet();

export const store = configureStore({
  reducer: {
    appSlice: appSlice,
    productSlice: persistedProductSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
