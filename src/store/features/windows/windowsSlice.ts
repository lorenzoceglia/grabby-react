import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { AppsType } from "@/components/apps/apps.ts";

export type WindowType = {
	id: string;
	title: string;
	component: AppsType;
	x: number;
	y: number;
	width: number;
	height: number;
	zIndex: number;
	minimized: boolean;
	maximized: boolean;
};

export interface WindowsStateType {
	windows: WindowType[];
}

const initialState: WindowsStateType = {
	windows: [],
};

export const windowsSlice = createSlice({
	name: "windows",
	initialState,
	reducers: {
		openWindow: (
			state,
			action: PayloadAction<{ window: Omit<WindowType, "id"> }>,
		) => {
			return {
				windows: [
					...state.windows,
					{ id: crypto.randomUUID(), ...action.payload.window },
				],
			};
		},
		closeWindow: (state, action: PayloadAction<{ id: string }>) => {
			return {
				...state.windows,
				windows: state.windows.filter((w) => w.id !== action.payload.id),
			};
		},
		updateWindow: (
			state,
			action: PayloadAction<{ id: string; newProps: Partial<WindowType> }>,
		) => {
			return {
				...state.windows,
				windows: state.windows.map((w) =>
					w.id === action.payload.id ? { ...w, ...action.payload.newProps } : w,
				),
			};
		},
	},
});

export const { openWindow, closeWindow, updateWindow } = windowsSlice.actions;

export default windowsSlice.reducer;
