import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://staging.martvill.techvill.net/api' }),
  endpoints: (builder) => ({
    getSliders: builder.query({
      query: () => '/sliders',
    }),
  }),
});

export const { useGetSlidersQuery } = api;
