import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const registerUserApiSlice = createApi({
    reducerPath: "registerUser",
    baseQuery: fetchBaseQuery({
        baseUrl:"https://kibali-prod.herokuapp.com",
    }),
    tagTypes: ["register"],
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (userDetails) => ({
                url: "/auth/users/",
                method: "post",
                body: userDetails
            })
        }),
        activateUser: builder.mutation({
            query: (activationData) => ({
                url:"/auth/users/activation/",
                method:"post",
                body: activationData
            })
        }),
        getCountries: builder.query({
            query: () => ({
                url:"/countries/",
                method:"GET"
            })
        }),
        sendResetEmail: builder.mutation({
            query: (email) => ({
                url:"/auth/users/reset_password/",
                method:"post",
                body: email
            })
        }),
        resetPassword: builder.mutation({
            query: (data) => ({
                url:"/auth/users/reset_password_confirm/",
                method:"post",
                body: data
            })
        }),
    })
})

export const {
    useRegisterUserMutation,
    useActivateUserMutation,
    useGetCountriesQuery,
    useSendResetEmailMutation,
    useResetPasswordMutation

} = registerUserApiSlice