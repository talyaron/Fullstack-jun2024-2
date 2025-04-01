// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { dogBreed } from '../../model/dogModel'


// Define a service using a base URL and expected endpoints
export const dogApi = createApi({
    reducerPath: 'dogApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dog.ceo/api/' }),
    endpoints: (builder) => ({
        getDogsBreed: builder.query<dogBreed, string>({
            query: (name) => `breed/${name}/images`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDogsBreedQuery } = dogApi