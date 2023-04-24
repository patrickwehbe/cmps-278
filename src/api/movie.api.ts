import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:4000/movie",
	}),
	tagTypes: ["Movie", "UNAUTHORIZED", "UNKNOWN_ERROR"],
	reducerPath: "movie-api",
	endpoints: (build) => ({
		// GET all movies start region
		getAllMovies: build.query({
			query: () => `/all`,
		}),
		// GET all movies end region

		// GET one movie start region
		getOneMovie: build.query({
			query: (id) => `/${id}`,
		}),
		// GET one movie end region

		// POST movie start region
		addMovie: build.mutation({
			query: (body) => ({
				url: "createMovie",
				method: "POST",
				body,
			}),
			invalidatesTags: ["Movie"],
		}),
		// POST movie end region

		// PATCH movie start region
		editValue: build.mutation({
			query: (body) => ({
				url: `updateMovie/${body.id}`,
				method: "PUT",
				body,
			}),
		}),
		// PATCH movie end region
	}),
	// DELETE value start region
});

export const { useGetAllMoviesQuery, useGetOneMovieQuery } = movieApi;
