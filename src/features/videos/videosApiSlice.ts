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
        })
    })
})

export const {
    useCreateVideoMutation,
    useGetVideoCategoriesQuery,
    useGetVideosQuery,
    useGetVideosByIdQuery
} = videosApiSlice