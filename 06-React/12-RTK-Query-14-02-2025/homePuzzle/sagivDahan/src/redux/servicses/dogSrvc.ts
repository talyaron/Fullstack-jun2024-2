import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dogsAPI = createApi({
    reducerPath: 'dogsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dog.ceo/api/breed' }),
    endpoints: (builder) => ({
        GetDogsByName: builder.query<{ message: string[] }, string>({
            query: (name) => `/${name}/images`,
        }),
    }),
})

export const { useGetDogsByNameQuery } = dogsAPI
