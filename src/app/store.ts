import {configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import { registerUserApiSlice } from "../features/auth/registerUserApiSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [registerUserApiSlice.reducerPath]: registerUserApiSlice.reducer,
        auth: authReducer,
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(apiSlice.middleware, registerUserApiSlice.middleware),
    devTools: true   //switch to false when taking to production
})