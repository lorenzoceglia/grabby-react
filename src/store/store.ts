import { configureStore } from "@reduxjs/toolkit";
import appReducer from "@/store/features/app/appSlice.ts";
import windowsReducer from "@/store/features/windows/windowsSlice.ts";

export const store = configureStore({
	reducer: {
		app: appReducer,
		windows: windowsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
