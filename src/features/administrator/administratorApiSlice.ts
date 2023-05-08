import { apiSlice } from "../../app/api/apiSlice";

export const administrationApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getApprovedInstructor: builder.query({
            query: () => ({
                url:"/administration/instructors/approved",
                method:"GET"
            }),
            providesTags:['apis']
        }),
        getApprovedInstructorById: builder.query({
            query: (id) => ({
                url:`/administration/instructors/approved/${id}`,
                method:"GET"
            }),
            providesTags:['apis']
        }),
        updateInstructorById: builder.mutation({
            query: (data) => ({
                url:`/administration/instructors/approved/${data?.id}`,
                method:"PUT",
                body: data
            }),
            invalidatesTags: ['apis']
        }),
        patialUpdateInstructorById: builder.mutation({
            query: (data) => ({
                url:`/administration/instructors/approved/${data?.id}`,
                method:"PATCH",
                body: data
            }),
            invalidatesTags: ['apis']
        }),
        updateChangeApprovedById: builder.mutation({
            query: (data) => ({
                url:`/administration/instructors/change-approved/${data?.id}/`,
                method:"PUT",
                body: data
            }),
            invalidatesTags: ['apis']
        }),
        partialUpdateChangeApprovedById: builder.mutation({
            query: (data) => ({
                url:`/administration/instructors/change-approved/${data?.id}/`,
                method:"PATCH",
                body: data
            }),
            invalidatesTags: ['apis']
        }),
        updateApproveCourseById: builder.mutation({
            query: (data) => ({
                url:`/administration/courses/pending/${data?.id}/`,
                method:"PUT",
                body: data
            }),
            invalidatesTags: ['apis']
        }),
        partialApproveCourseById: builder.mutation({
            query: (data) => ({
                url:`/administration/courses/pending/${data?.id}/`,
                method:"PATCH",
                body: data
            }),
            invalidatesTags: ['apis']
        }),
        getPendingInstructor: builder.query({
            query: () => ({
                url:"/administration/instructors/pending",
                method:"GET"
            }),
            providesTags:['apis']
        }),
        getPendingInstructorById: builder.query({
            query: (id) => ({
                url:`/administration/instructors/pending/${id}`,
                method:"GET"
            }),
            providesTags:['apis']
        }),
        updatePendingInstructorById: builder.mutation({
            query: (data) => ({
                url:`/administration/instructors/pending/${data.id}`,
                method:"PUT",
                body: data
            }),
            invalidatesTags: ['apis']
        }),
        patialUpdatePendingInstructorById: builder.mutation({
            query: (data) => ({
                url:`/administration/instructors/pending/${data.id}`,
                method:"PATCH",
                body: data
            }),
            invalidatesTags: ['apis']
        }),
        getAllUsers: builder.query({
            query: () => ({
                url:"/administration/users",
                method:"GET"
            }),
            providesTags:['apis']
        }),
        getPendingCourses: builder.query({
            query: () => ({
                url:"/administration/courses/pending",
                method:"GET"
            }),
            providesTags:['apis']
        }),
        getApprovedCourses: builder.query({
            query: () => ({
                url:"/administration/courses/approved",
                method:"GET"
            }),
            providesTags:['apis']
        }),
        getAllStudents: builder.query({
            query: () => ({
                url:"/administration/students",
                method:"GET"
            }),
            providesTags:['apis']
        }),
        getApprovedVideos: builder.query({
            query: () => ({
                url:"/administration/videos/approved",
                method:"GET"
            }),
            providesTags:['apis']
        }),
        getPendingVideos: builder.query({
            query: () => ({
                url:"/administration/videos/pending",
                method:"GET"
            }),
            providesTags:['apis']
        }),
        partialUpdatePendingVideosById: builder.mutation({
            query: (data) => ({
                url:`/administration/videos/pending/${data.id}/`,
                method:"PATCH",
                body: data
            }),
            invalidatesTags: ['apis']
        }),
})
})

export const {
    useGetAllUsersQuery,
    useGetPendingInstructorQuery,
    useGetApprovedInstructorQuery,
    useUpdateChangeApprovedByIdMutation,
    usePartialUpdateChangeApprovedByIdMutation,
    useGetApprovedCoursesQuery,
    useGetPendingCoursesQuery,
    usePartialApproveCourseByIdMutation,
    useUpdateApproveCourseByIdMutation,
    useGetAllStudentsQuery,
    useGetApprovedVideosQuery,
    useGetPendingVideosQuery,
    usePartialUpdatePendingVideosByIdMutation
} = administrationApiSlice