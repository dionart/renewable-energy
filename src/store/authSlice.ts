import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
	isAuthenticated: boolean;
	user: {
		id: number;
		name?: string;
		lastName?: string;
		email: string;
	} | null;
}

const initialState: AuthState = {
	isAuthenticated: false,
	user: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login(state, action: PayloadAction<{ id: number; email: string }>) {
			state.isAuthenticated = true;
			state.user = action.payload;
		},
		logout(state) {
			state.isAuthenticated = false;
			state.user = null;
		},
		signUp(
			state,
			action: PayloadAction<{
				id: number;
				name: string;
				lastName: string;
				email: string;
			}>
		) {
			state.user = action.payload;
		},
	},
});

export const { login, logout, signUp } = authSlice.actions;
export default authSlice.reducer;
