import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsAPI = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (products) => `${products}`,
    }),
    getCategory: builder.query({
      query: (subcategory) => `/products/category/${subcategory}`,
    }),

  }),
});

export const { useGetAllProductsQuery, useGetCategoryQuery } =
  productsAPI;
