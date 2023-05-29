import { apiSlice } from "../../app/api/apiSlice";

export const quizesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getQuizeLevel: builder.query({
            query: () => ({
                url:"/quizzes/levels",
                method:"GET"
            }),
            providesTags:['apis']
        }),
        getQuizesById: builder.query({
            query: (id) => ({
                url:`/quizzes/${id}/`,
                method:"GET"
            }),
            providesTags:['apis']
        }),
        postResult: builder.mutation({
            query: (data) => ({
                url:"/quizzes/results/create/",
                method:"POST",
                body: data
            }),
            invalidatesTags: ['apis'] 
        }),
    })
})

export const {
    useGetQuizeLevelQuery,
    useGetQuizesByIdQuery,
    usePostResultMutation
} = quizesApiSlice