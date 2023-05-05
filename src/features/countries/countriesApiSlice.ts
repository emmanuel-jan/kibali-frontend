import { apiSlice } from "../../app/api/apiSlice";

export const countriesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCountries: builder.query({
            query: () => ({
                url:"/countries/",
                method:"GET"
            })
        }),
})
})

export const {
 
} = countriesApiSlice