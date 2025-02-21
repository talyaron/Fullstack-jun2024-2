import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Dog } from '../../model/dogModel'


// Define a service using a base URL and expected endpoints
export const dogApi = createApi({
    reducerPath: 'dogApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dog.ceo/api/breed/' }),
    endpoints: (builder) => ({
        getDogByName: builder.query<Dog, string>({
            query: (breed) => `${breed}/images`,
        }),
    }),
})
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDogByNameQuery } = dogApi