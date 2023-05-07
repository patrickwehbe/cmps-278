import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:4000/book",
	}),
	tagTypes: ["Book", "UNAUTHORIZED", "UNKNOWN_ERROR"],
	reducerPath: "book-api",
	endpoints: (build) => ({
		// GET all values start region
		getAllBooks: build.query({
			query: () => `all`,
		}),
		// GET all values end region

		// GET one value start region
		getOneBook: build.query({
			query: (id) => `/one/${id}`,
		}),
		// GET one value end region

		// POST value start region
		addBook: build.mutation({
			query: (body) => ({
				url: "createBook",
				method: "POST",
				body,
			}),
			invalidatesTags: ["Book"],
		}),
		// POST value end region

		// PATCH value start region
		editValue: build.mutation({
			query: (body) => ({
				url: `updateBook/${body.book_id}`,
				method: "PUT",
				body,
			}),
		}),
		// PATCH value end region
	}),
	// DELETE value start region
});

export const {
	useGetAllBooksQuery,
	useGetOneBookQuery,
	useAddBookMutation,
	useEditValueMutation,
} = bookApi;
