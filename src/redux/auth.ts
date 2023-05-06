import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoggedIn: false,
	user: null,
	accessToken: null,
	refreshToken: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action) => {
			state.isLoggedIn = true;
			state.user = action.payload;
		},
		logout: (state) => {
			state.isLoggedIn = false;
			state.user = null;
		},
		register: (state, action) => {
			state.isLoggedIn = true;
			state.user = action.payload.user;
			state.accessToken = action.payload.accesstoken;
			state.refreshToken = action.payload.refreshtoken;
		},
	},
});

export const { login, logout, register } = authSlice.actions;

export default authSlice.reducer;
