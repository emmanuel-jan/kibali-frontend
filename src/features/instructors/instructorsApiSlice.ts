import { apiSlice } from "../../app/api/apiSlice";

export const instructorsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createInstructor: builder.mutation({
            query: (instructorInfo) => ({
                url:"/instructors/create/",
                method:"POST",
                body: instructorInfo
            }),
            invalidatesTags: ['apis'] 
        }),
        createInstructorVideo: builder.mutation({
            query: (data) => ({
                url:"/instructors/videos/create/",
                method:"POST",
                body: data
            }),
            invalidatesTags: ['apis'] 
        }),
        createInstructorCourses: builder.mutation({
            query: (data) => ({
                url:"/instructors/courses/create/",
                method:"POST",
                body: data
            }),
            invalidatesTags: ['apis'] 
        }),
        getInstructorInfo: builder.query({
            query: () => ({
                url:"/instructors/",
                method:"GET"
            }),
            providesTags: ['apis']
        }),
        getInstructorCourses: builder.query({
            query: () => ({
                url:"/instructors/courses/",
                method:"GET"
            }),
            providesTags: ['apis']
        }),
        getInstructorVideos: builder.query({
            query: () => ({
                url:"/instructors/videos",
                method:"GET"
            }),
            providesTags: ['apis']
        }),
        getInstructorCoursesById: builder.query({
            query: (id) => ({
                url:`/instructors/courses/${id}`,
                method:"GET"
            }),
            providesTags: ['apis']
        }),
        getInstructorInfoById: builder.query({
            query: (id) => ({
                url:`/instructors/${id}`,
                method:"GET"
            }),
            providesTags: ['apis']
        }),
        updateInstructorInfoById: builder.mutation({
            query: (data) => ({
                url:`/instructors/${data.id}`,
                method:"PUT",
                body: data
            }),
            invalidatesTags: ['apis']
        }),
        partialUpdateInstructorInfoById: builder.mutation({
            query: (data) => ({
                url:`/instructors/${data.id}`,
                method:"PATCH",
                body: data
            }),
            invalidatesTags: ['apis']
        }),
        deleteInstructorInfoById: builder.mutation({
            query: (data) => ({
                url:`/instructors/${data.id}`,
                method:"DELETE",
            }),
            invalidatesTags: ['apis']
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
    useGetInstructorCoursesByIdQuery,
    useCreateInstructorVideoMutation,
    useGetInstructorVideosQuery,
    useCreateInstructorCoursesMutation
} = instructorsApiSlice