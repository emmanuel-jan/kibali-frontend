import { apiSlice } from "../../app/api/apiSlice";

export const coursesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createCourse: builder.mutation({
            query: (data) => ({
                url:"/courses/create/",
                method:"POST",
                body: data
            }) 
        }),
        getCourses: builder.query({
            query: () => ({
                url:"/courses/",
                method:"GET"
            })
        }),
        getCoursesCategories: builder.query({
            query: () => ({
                url:"/courses/categories/",
                method:"GET"
            })
        }),
        getCoursesCategoriesById: builder.query({
            query: (id) => ({
                url:`/courses/categories/${id}/`,
                method:"GET"
            })
        }),
        getCoursesById: builder.query({
            query: (id) => ({
                url:`/courses/${id}/`,
                method:"GET"
            })
        }),
        updateCoursesById: builder.mutation({
            query: (data) => ({
                url:`/courses/${data.id}`,
                method:"PUT",
                body: data
            })
        }),
        partialUpdateCoursesById: builder.mutation({
            query: (data) => ({
                url:`/courses/${data.id}`,
                method:"PUT",
                body: data
            })
        }),
        deleteCoursesById: builder.mutation({
            query: (id) => ({
                url:`/courses/${id}`,
                method:"DELETE",
            })
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
    useGetCoursesCategoriesByIdQuery
} = coursesApiSlice