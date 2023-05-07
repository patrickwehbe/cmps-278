import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoggedIn: false,
	user: null,
	accessToken: null,
	refreshToken: null,
	lastVisited: [] as any,
	wishlist: [] as any,
};

interface VisitedAction {
	type: string;
	payload: any; // or whatever type the payload should be
}

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action) => {
			state.isLoggedIn = true;
			state.user = action.payload.user;
			state.accessToken = action.payload.accesstoken;
			state.refreshToken = action.payload.refreshtoken;
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
		visited: (state, action: VisitedAction) => {
			state.lastVisited.push(action.payload);
		},
		wishlist: (state, action) => {
			state.wishlist.push(action.payload);
		},
	},
});

export const selectUser = (state: any) => state.auth.user;
export const selectLastVisited = (state: any) => state.auth.lastVisited;
export const selectWishlist = (state: any) => state.auth.wishlist;

export const { login, logout, register, visited, wishlist } = authSlice.actions;

export default authSlice.reducer;
