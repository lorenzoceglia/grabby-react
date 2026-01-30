import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const THEMES = {
	LIGHT: "light",
	DARK: "dark",
} as const;

export type THEMES = (typeof THEMES)[keyof typeof THEMES];

export interface AppStateType {
	themeMode: THEMES;
}

const initialState: AppStateType = {
	themeMode: THEMES.LIGHT,
};

export const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		toggleTheme: (state) => {
			const themeToApply =
				state.themeMode === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
			return {
				themeMode: themeToApply,
			};
		},
		applyTheme: (_state, action: PayloadAction<{ themeMode: THEMES }>) => {
			return {
				themeMode: action.payload.themeMode,
			};
		},
	},
});

export const { toggleTheme, applyTheme } = appSlice.actions;

export default appSlice.reducer;
