import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookreplyApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/Bookreply",
  }),
  tagTypes: ["BookReply", "UNAUTHORIZED", "UNKNOWN_ERROR"],
  reducerPath: "bookreply-api",
  endpoints: (build) => ({
    // GET all replies start region
    getAllBookReplies: build.query({
      query: () => `all`,
    }),
    // GET all replies end region

    // GET one reply start region
    getOneBookReply: build.query({
      query: (id) => `/one/${id}`,
    }),
    // GET one reply end region

    // POST reply start region
    addBookReply: build.mutation({
      query: (body) => ({
        url: "createReply",
        method: "POST",
        body,
      }),
      invalidatesTags: ["BookReply"],
    }),
    // POST reply end region

    // PATCH reply start region
    editBookReply: build.mutation({
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
  useGetAllBookRepliesQuery,
  useAddBookReplyMutation,
  useGetOneBookReplyQuery,
} = bookreplyApi;
