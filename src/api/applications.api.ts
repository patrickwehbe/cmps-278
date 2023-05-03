import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const applicationApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:4000/application",
	}),
	tagTypes: ["Application", "UNAUTHORIZED", "UNKNOWN_ERROR"],
	reducerPath: "application-api",
	endpoints: (build) => ({
		// GET all values start region
		getAllApplications: build.query({
			query: () => `all`,
		}),
		// GET all values end region

		// GET one value start region
		getOneApplication: build.query({
			query: (id) => `/one/${id}`,
		}),
		// GET one value end region

		// POST value start region
		addApplication: build.mutation({
			query: (body) => ({
				url: "createApplication",
				method: "POST",
				body,
			}),
			invalidatesTags: ["Application"],
		}),
		// POST value end region

		// PATCH value start region
		editValue: build.mutation({
			query: (body) => ({
				url: `updateApplication/${body.id}`,
				method: "PUT",
				body,
			}),
		}),
		// PATCH value end region
	}),
	// DELETE value start region
});

export const { useGetAllApplicationsQuery, useGetOneApplicationQuery } = applicationApi;
