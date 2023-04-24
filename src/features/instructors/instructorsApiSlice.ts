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
        }),
        getInstructorCourses: builder.query({
            query: () => ({
                url:"/instructors/courses/",
                method:"GET"
            })
        }),
        getInstructorCoursesById: builder.query({
            query: (id) => ({
                url:`/instructors/courses/${id}`,
                method:"GET"
            })
        }),
        getInstructorInfoById: builder.query({
            query: (id) => ({
                url:`/instructors/${id}`,
                method:"GET"
            })
        }),
        updateInstructorInfoById: builder.mutation({
            query: (data) => ({
                url:`/instructors/${data.id}`,
                method:"PUT",
                body: data
            })
        }),
        partialUpdateInstructorInfoById: builder.mutation({
            query: (data) => ({
                url:`/instructors/${data.id}`,
                method:"PATCH",
                body: data
            })
        }),
        deleteInstructorInfoById: builder.mutation({
            query: (data) => ({
                url:`/instructors/${data.id}`,
                method:"DELETE",
            })
        }),
    })
})

export const {
    useCreateInstructorMutation,
    useGetInstructorInfoQuery,
    useGetInstructorInfoByIdQuery,
    useUpdateInstructorInfoByIdMutation,
    usePartialUpdateInstructorInfoByIdMutation,
    useDeleteInstructorInfoByIdMutation,
    useGetInstructorCoursesQuery,
    useGetInstructorCoursesByIdQuery
} = instructorsApiSlice