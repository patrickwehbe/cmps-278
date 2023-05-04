import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appreplyApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/appreply",
  }),
  tagTypes: ["AppReply", "UNAUTHORIZED", "UNKNOWN_ERROR"],
  reducerPath: "appreply-api",
  endpoints: (build) => ({
    // GET all replies start region
    getAllAppReplies: build.query({
      query: () => `all`,
    }),
    // GET all replies end region

    // GET one reply start region
    getOneAppReply: build.query({
      query: (id) => `/one/${id}`,
    }),
    // GET one reply end region

    // POST reply start region
    addAppReply: build.mutation({
      query: (body) => ({
        url: "createReply",
        method: "POST",
        body,
      }),
      invalidatesTags: ["AppReply"],
    }),
    // POST reply end region

    // PATCH reply start region
    editAppReply: build.mutation({
      query: (body) => ({
        url: `updateReply/${body.id}`,
        method: "PUT",
        body,
      }),
    }),
    // PATCH reply end region
  }),
  // DELETE reply start region
});

export const {
  useGetAllAppRepliesQuery,
  useAddAppReplyMutation,
  useGetOneAppReplyQuery,
} = appreplyApi;
