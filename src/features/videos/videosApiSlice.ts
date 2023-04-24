import { apiSlice } from "../../app/api/apiSlice";

export const videosApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createVideo: builder.mutation({
            query: (videoDetails) => ({
                url: "/videos/create/",
                method: "POST",
                body: videoDetails
            })
        }),
        getVideoCategories: builder.query({
            query: () => ({
                url: "/videos/categories/",
                method:"GET"
            })
        }),
        getVideos: builder.query({
            query: () => ({
                url:"/videos/",
                method:"GET"
            })
        }),
        getVideosById: builder.query({
            query: (id) => ({
                url:`/videos/${id}`,
                method:"GET"
            })
        }),
        updateVideos: builder.mutation({
            query: (data) => ({
                url: `/videos/$data.id}`,
                method: "PUT",
                body: data
            })
        }),
        partialUpdateVideos: builder.mutation({
            query: (data) => ({
                url: `/videos/$data.id}`,
                method: "PATCH",
                body: data
            })
        }),
        getVideoComments: builder.query({
            query: () => ({
                url:"/videos/comments",
                method:"GET"
            })
        }),
        getVideoCommentsById: builder.query({
            query: (id) => ({
                url:`/videos/comments/${id}/`,
                method:"GET"
            })
        }),
        updateVideoCommentsById: builder.mutation({
            query: (id) => ({
                url:`/videos/comments/${id}/`,
                method:"PUT"
            })
        }),
        partialUpdateVideoCommentsById: builder.mutation({
            query: (id) => ({
                url:`/videos/comments/${id}/`,
                method:"PATCH"
            })
        }),
        deleteVideoCommentsById: builder.mutation({
            query: (id) => ({
                url:`/videos/comments/${id}/`,
                method:"DELETE"
            })
        }),
        createVideoComment: builder.mutation({
            query: (data) => ({
                url:`/videos/comments/create/`,
                method:"POST",
                body: data
            })
        }),
        getVideoRatings: builder.query({
            query: () => ({
                url:"/videos/ratings/",
                method:"GET"
            })
        }),
        getVideoRatingsById: builder.query({
            query: (id) => ({
                url:`/videos/ratings/${id}`,
                method:"GET"
            })
        }),
        updateVideoRatingsById: builder.query({
            query: (data) => ({
                url:`/videos/ratings/${data.id}`,
                method:"PUT",
                body: data
            })
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