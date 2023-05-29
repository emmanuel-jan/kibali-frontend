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

    })
})

export const {
    useGetQuizeLevelQuery,
    useGetQuizesByIdQuery
} = quizesApiSlice