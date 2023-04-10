import { apiSlice } from "../../app/api/apiSlice";

export const instructorsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createInstructor: builder.mutation({
            query: (instructorInfo) => ({
                url:"/instructors/create/",
                method:"POST",
                body: instructorInfo
            }) 
        }),
        getInstructorInfo: builder.query({
            query: () => ({
                url:"/instructors/",
                method:"GET"
            })
        })
    })
})

export const {
    useCreateInstructorMutation,
    useGetInstructorInfoQuery
} = instructorsApiSlice