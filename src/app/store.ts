import {Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import { registerUserApiSlice } from "../features/auth/registerUserApiSlice";
import authReducer from "../features/auth/authSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistAuthConfig = {
    key: "auth",
    storage,
  };

  const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [registerUserApiSlice.reducerPath]: registerUserApiSlice.reducer,
        auth: persistedAuthReducer,
        //persistAuth: persistedAuthReducer
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({ serializableCheck: false }).concat(apiSlice.middleware, registerUserApiSlice.middleware),
    devTools: true   //switch to false when taking to production
})

export const persistor = persistStore(store);
