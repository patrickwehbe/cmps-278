import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gameApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:4000/game",
	}),
	tagTypes: ["Game", "UNAUTHORIZED", "UNKNOWN_ERROR"],
	reducerPath: "game-api",
	endpoints: (build) => ({
		// GET all values start region
		getAllGames: build.query({
			query: () => `all`,
		}),
		// GET all values end region

		// GET one value start region
		getOneGame: build.query({
			query: (id) => `/${id}`,
		}),
		// GET one value end region

		// POST value start region
		addGame: build.mutation({
			query: (body) => ({
				url: "createGame",
				method: "POST",
				body,
			}),
			invalidatesTags: ["Game"],
		}),
		// POST value end region

		// PATCH value start region
		editValue: build.mutation({
			query: (body) => ({
				url: `updateGame/${body.id}`,
				method: "PUT",
				body,
			}),
		}),
		// PATCH value end region
	}),
	// DELETE value start region
});

export const { useGetAllGamesQuery, useGetOneGameQuery } = gameApi;