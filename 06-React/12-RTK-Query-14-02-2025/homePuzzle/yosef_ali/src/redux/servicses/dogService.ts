import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dogApi = createApi({
    reducerPath: "dogApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dog.ceo/api/breed/" }),
    endpoints: (builder) => ({
        getDogsBreed: builder.query<{ message: string[] }, string>({
            query: (breed) => `${breed}/images`,
        }),
    }),
})

export const { useGetDogsBreedQuery } = dogApi;