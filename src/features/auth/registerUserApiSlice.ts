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
        })
    })
})

export const {
    useRegisterUserMutation,
    useActivateUserMutation
} = registerUserApiSlice