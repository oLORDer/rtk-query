import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://631c3dd74fa7d3264ca9c85e.mockapi.io/contacts/",
  }),
  tagTypes: ["Posts"],
  endpoints: (build) => ({
    getPosts: build.query({
      query: (page) => `/posts?page=${page}&limit=3`,
      providesTags: ["Posts"],
    }),
    addPost: build.mutation({
      query: (body) => ({
        url: `posts`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Posts"],
    }),
    deletePost: build.mutation({
      query(id) {
        return {
          url: `posts/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ['Posts'],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useLazyGetPostsQuery,
  useAddPostMutation,
  useDeletePostMutation,
} = api;
