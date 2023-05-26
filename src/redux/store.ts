import { configureStore } from '@reduxjs/toolkit';
import domainReducer from './slices/domainSlice';
import organizationReducer from './slices/organizationSlice';

export const store = configureStore({
  reducer: {
    domain: domainReducer,
    organizationSlice: organizationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
