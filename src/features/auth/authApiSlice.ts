import { apiSlice } from "../../app/api/apiSlice";
import authSlice from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/auth/jwt/create/",
                method: "POST",
                body: credentials
            })
        }),
        getUserInfo: builder.query({
            query: () => ({
                url:"/auth/users/me/",
                method: "GET"
            })
        })
    })
})

export const {
    useLoginMutation,
    useGetUserInfoQuery
} = authApiSlice