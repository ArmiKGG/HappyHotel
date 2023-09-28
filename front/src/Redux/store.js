import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import userSlice from './slices/userSlice';

export const store = configureStore({
	reducer: { userSlice: userSlice },
	devTools: true,
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});
