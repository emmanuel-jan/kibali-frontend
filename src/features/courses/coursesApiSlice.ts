import { apiSlice } from "../../app/api/apiSlice";

export const coursesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createCourse: builder.mutation({
            query: (data) => ({
                url:"/courses/create/",
                method:"POST",
                body: data
            }),
            invalidatesTags: ['apis'] 
        }),
        getCourses: builder.query({
            query: () => ({
                url:"/courses/",
                method:"GET"
            }),
            providesTags:['apis']
        }),
        getCoursesLevels: builder.query({
            query: () => ({
                url:"/courses/levels",
                method:"GET"
            }),
            providesTags:['apis']
        }),
        getCoursesTypes: builder.query({
            query: () => ({
                url:"/courses/types",
                method:"GET"
            }),
            providesTags:['apis']
        }),
        getCoursesCategories: builder.query({
            query: () => ({
                url:"/courses/categories",
                method:"GET"
            }),
            providesTags:['apis']
        }),
        getCoursesCategoriesById: builder.query({
            query: (data) => ({
                url:`/courses/?course_category=${data.id}&course_level=${data.yearId}`,
                method:"GET"
            }),
            providesTags:['apis']
        }),
        getCoursesCategoriesByIds: builder.query({
            query: (id) => ({
                url:`/courses/?course_category=${id}`,
                method:"GET"
            }),
            providesTags:['apis']
        }),
        getCoursesById: builder.query({
            query: (id) => ({
                url:`/courses/${id}/`,
                method:"GET"
            }),
            providesTags:['apis']
        }),
        updateCoursesById: builder.mutation({
            query: (data) => ({
                url:`/courses/${data.id}`,
                method:"PUT",
                body: data
            }),
            invalidatesTags: ['apis']
        }),
        partialUpdateCoursesById: builder.mutation({
            query: (data) => ({
                url:`/courses/${data.id}`,
                method:"PUT",
                body: data
            }),
            invalidatesTags: ['apis']
        }),
        deleteCoursesById: builder.mutation({
            query: (id) => ({
                url:`/courses/${id}`,
                method:"DELETE",
            }),
            invalidatesTags: ['apis']
        }),
    })
})

export const {
    useCreateCourseMutation,
    useGetCoursesQuery,
    useGetCoursesByIdQuery,
    useUpdateCoursesByIdMutation,
    usePartialUpdateCoursesByIdMutation,
    useDeleteCoursesByIdMutation,
    useGetCoursesCategoriesQuery,
    useGetCoursesCategoriesByIdQuery,
    useGetCoursesLevelsQuery,
    useGetCoursesTypesQuery,
    useGetCoursesCategoriesByIdsQuery
} = coursesApiSlice