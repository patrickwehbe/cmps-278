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
			state.wishlist = action.payload.user.wishlist
				? JSON.parse(action.payload.user.wishlist)
				: [];

			localStorage.setItem("user", JSON.stringify(state.user));
			localStorage.setItem("accessToken", action.payload.accesstoken);
			localStorage.setItem("refreshToken", action.payload.refreshtoken);
		},
		logout: (state) => {
			state.isLoggedIn = false;
			state.user = null;
			state.accessToken = null;
			state.refreshToken = null;
			state.lastVisited = [];
			state.wishlist = [];
			localStorage.removeItem("user");
			localStorage.removeItem("accessToken");
			localStorage.removeItem("refreshToken");
		},
		register: (state, action) => {
			state.isLoggedIn = true;
			state.user = action.payload.user;
			state.accessToken = action.payload.accesstoken;
			state.refreshToken = action.payload.refreshtoken;
		},
		setVisited: (state, action: VisitedAction) => {
			state.lastVisited = [...state.lastVisited.slice(-24), action.payload];
		},
		addWishlist: (state, action) => {
			state.wishlist = [...state.wishlist, action.payload];
		},
	},
});

export const selectUser = (state: any) => state.auth.user;
export const selectLastVisited = (state: any) => state.auth.lastVisited;
export const selectWishlist = (state: any) => state.auth.wishlist;

export const { login, logout, register, setVisited, addWishlist } = authSlice.actions;

export default authSlice.reducer;
