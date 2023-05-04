import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	email: "",
	password: "",
	loading: false,
	error: null,
	isAuthenticated: false,
};

const authSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		setEmail: (state: { email: any }, action: { payload: any }) => {
			state.email = action.payload;
		},
		setPassword: (state: { password: any }, action: { payload: any }) => {
			state.password = action.payload;
		},
		setLoading: (state: { loading: any }, action: { payload: any }) => {
			state.loading = action.payload;
		},
		setError: (state: { error: any }, action: { payload: any }) => {
			state.error = action.payload;
		},
		setIsAuthenticated: (
			state: { isAuthenticated: any },
			action: { payload: any }
		) => {
			state.isAuthenticated = action.payload;
		},
	},
});

export const { setEmail, setPassword, setLoading, setError, setIsAuthenticated } =
	authSlice.actions;

export default authSlice.reducer;
