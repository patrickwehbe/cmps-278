import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:4000/user",
	}),
	tagTypes: ["User", "UNAUTHORIZED", "UNKNOWN_ERROR"],
	reducerPath: "user-api",
	endpoints: (build) => ({
		// GET all Users start region
		getAllUsers: build.query({
			query: () => `/all`,
		}),
		// GET all Users end region

		// GET one User start region
		getOneUser: build.query({
			query: (id) => `/one/${id}`,
		}),
		// GET one User end region

		// POST User start region
		addUser: build.mutation({
			query: (body) => ({
				url: "createUser",
				method: "POST",
				body,
			}),
			invalidatesTags: ["User"],
		}),
		// POST User end region

		// PATCH User start region
		editValue: build.mutation({
			query: (body) => ({
				url: `updateUser/${body.id}`,
				method: "PUT",
				body,
			}),
		}),
		// PATCH User end region
	}),
	// DELETE value start region
});

export const { useGetAllUsersQuery, useGetOneUserQuery } = userApi;
