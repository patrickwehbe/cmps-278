import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { valueApi } from "../api";
import { userApi } from "../api/user.api";
import { applicationApi } from "../api/applications.api";
import { bookApi } from "../api/books.api";
import { gameApi } from "../api/games.api";
import { movieApi } from "../api/movie.api";

export const store = configureStore({
	reducer: {
		[userApi.reducerPath]: userApi.reducer,
		[valueApi.reducerPath]: valueApi.reducer,
		[applicationApi.reducerPath]: applicationApi.reducer,
		[bookApi.reducerPath]: bookApi.reducer,
		[gameApi.reducerPath]: gameApi.reducer,
		[movieApi.reducerPath]: movieApi.reducer,
	},
	middleware: (gDM) =>
		gDM().concat(
			userApi.middleware,
			valueApi.middleware,
			applicationApi.middleware,
			bookApi.middleware,
			gameApi.middleware,
			movieApi.middleware
		),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
