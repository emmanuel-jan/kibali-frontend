import { apiSlice } from "../../app/api/apiSlice";

export const videosApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createVideo: builder.mutation({
            query: (videoDetails) => ({
                url: "/videos/create/",
                method: "POST",
                body: videoDetails
            }),
            invalidatesTags: ['apis']
        }),
        getVideoCategories: builder.query({
            query: () => ({
                url: "/videos/categories/",
                method:"GET"
            }),
            providesTags: ['apis']
        }),
        getVideos: builder.query({
            query: () => ({
                url:"/videos/",
                method:"GET"
            }),
            providesTags: ['apis']
        }),
        getVideosById: builder.query({
            query: (id) => ({
                url:`/videos/${id}`,
                method:"GET"
            }),
            providesTags: ['apis']
        }),
        updateVideos: builder.mutation({
            query: (data) => ({
                url: `/videos/$data.id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ['apis']
        }),
        partialUpdateVideos: builder.mutation({
            query: (data) => ({
                url: `/videos/$data.id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ['apis']
        }),
        getVideoComments: builder.query({
            query: () => ({
                url:"/videos/comments",
                method:"GET"
            }),
            providesTags: ['apis']
        }),
        getVideoCommentsById: builder.query({
            query: (id) => ({
                url:`/videos/comments/${id}/`,
                method:"GET"
            }),
            providesTags: ['apis']
        }),
        updateVideoCommentsById: builder.mutation({
            query: (id) => ({
                url:`/videos/comments/${id}/`,
                method:"PUT"
            }),
            invalidatesTags: ['apis']
        }),
        partialUpdateVideoCommentsById: builder.mutation({
            query: (id) => ({
                url:`/videos/comments/${id}/`,
                method:"PATCH"
            }),
            invalidatesTags: ['apis']
        }),
        deleteVideoCommentsById: builder.mutation({
            query: (id) => ({
                url:`/videos/comments/${id}/`,
                method:"DELETE"
            }),
            invalidatesTags: ['apis']
        }),
        createVideoComment: builder.mutation({
            query: (data) => ({
                url:`/videos/comments/create/`,
                method:"POST",
                body: data
            }),
            invalidatesTags: ['apis']
        }),
        getVideoRatings: builder.query({
            query: () => ({
                url:"/videos/ratings/",
                method:"GET"
            }),
            providesTags: ['apis']
        }),
        getVideoRatingsById: builder.query({
            query: (id) => ({
                url:`/videos/ratings/${id}`,
                method:"GET"
            }),
            providesTags: ['apis']
        }),
        updateVideoRatingsById: builder.query({
            query: (data) => ({
                url:`/videos/ratings/${data.id}`,
                method:"PUT",
                body: data
            }),
        }),
    })
})

export const {
    useCreateVideoMutation,
    useGetVideoCategoriesQuery,
    useGetVideosQuery,
    useGetVideosByIdQuery,
    useUpdateVideosMutation,
    usePartialUpdateVideosMutation,
    useGetVideoCommentsQuery,
    useGetVideoCommentsByIdQuery,
    useUpdateVideoCommentsByIdMutation,
    usePartialUpdateVideoCommentsByIdMutation,
    useDeleteVideoCommentsByIdMutation,
    useCreateVideoCommentMutation,
    useGetVideoRatingsQuery,
    useGetVideoRatingsByIdQuery
} = videosApiSlice