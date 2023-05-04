import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appreviewApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/appreview",
  }),
  tagTypes: ["AppReview", "UNAUTHORIZED", "UNKNOWN_ERROR"],
  reducerPath: "appreview-api",
  endpoints: (build) => ({
    // GET all reviews start region
    getAllAppReviews: build.query({
      query: () => `all`,
    }),
    // GET all reviews end region

    // GET one review start region
    getOneAppReview: build.query({
      query: (id) => `/one/${id}`,
    }),
    // GET one review end region

    // POST review start region
    addAppReview: build.mutation({
      query: (body) => ({
        url: "createReview",
        method: "POST",
        body,
      }),
      invalidatesTags: ["AppReview"],
    }),
    // POST review end region

    // PATCH review start region
    editAppReview: build.mutation({
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
  useGetAllAppReviewsQuery,
  useGetOneAppReviewQuery,
} = appreviewApi;
