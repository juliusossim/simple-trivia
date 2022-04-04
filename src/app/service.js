import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const triviaApi = createApi({
    reducerPath: 'triviaApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://opentdb.com/api.php' }),
    endpoints: (builder) => ({
        getQuestions: builder.query({
            query: ({ amt, type, level }) => `?amount=${amt}&difficulty=${level}&type=${type}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetQuestionsQuery } = triviaApi