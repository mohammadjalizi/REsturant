// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (builder) => ({
    getproductsByName: builder.query({
      query: (name) => `products`,
    }),
  }),
})
// get only on product

export const onproductsApi = createApi({
  reducerPath: 'onproductsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (builder) => ({
    getOnproductsByName: builder.query({
      query: (name) => `products/${name}`,
    }),
  }),
})


export const { useGetproductsByNameQuery } = productsApi
export const { useGetOnproductsByNameQuery } = onproductsApi