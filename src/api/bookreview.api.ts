import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookreviewApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/Bookreview",
  }),
  tagTypes: ["BookReview", "UNAUTHORIZED", "UNKNOWN_ERROR"],
  reducerPath: "bookreview-api",
  endpoints: (build) => ({
    // GET all reviews start region
    getAllBookReviews: build.query({
      query: () => `all`,
    }),
    // GET all reviews end region

    // GET one review start region
    getOneBookReview: build.query({
      query: (id) => `/one/${id}`,
    }),
    // GET one review end region

    // POST review start region
    addBookReview: build.mutation({
      query: (body) => ({
        url: "createReview",
        method: "POST",
        body,
      }),
      invalidatesTags: ["BookReview"],
    }),
    // POST review end region

    // PATCH review start region
    editBookReview: build.mutation({
      query: (body) => ({
        url: `updateReview/${body.id}`,
        method: "PUT",
        body,
      }),
    }),
    // PATCH review end region
  }),
  // DELETE review start region
});

export const {
  useGetAllBookReviewsQuery,
  useGetOneBookReviewQuery,
} = bookreviewApi;
