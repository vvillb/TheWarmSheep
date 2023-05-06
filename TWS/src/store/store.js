import { configureStore } from '@reduxjs/toolkit';
import {breadcrumbSlice} from './slices/breadcrumbSlice';

export const store = configureStore({
  reducer: {
      breadcrumbs: breadcrumbSlice.reducer,
  },
})