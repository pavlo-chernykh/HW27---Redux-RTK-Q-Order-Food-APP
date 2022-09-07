import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3010'}),
  // tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET',
        // headers: {
        //   'Content-type': 'application/json'
        // }
      }),
    //   providesTags: (result) => result
    //     ? [
    //         ...result.map(({ id }) => ({ type: 'Products', id })),
    //         { type: 'Products', id: 'LIST' },
    //       ]
    //     : [{ type: 'Products', id: 'LIST' }],
    }),
    getSliderProducts: builder.query({
      query: () => ({
        url: '/sliderProducts',
        method: 'GET',
      }),
    }),
  })
})

export const { useGetProductsQuery, useGetSliderProductsQuery } = productsApi;