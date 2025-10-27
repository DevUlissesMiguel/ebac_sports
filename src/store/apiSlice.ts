// src/store/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto as ProdutoType } from '../types'

export const apiSlice = createApi({
  reducerPath: 'api',
  // 1. COLOQUE A URL BASE AQUI:
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api-ebac.vercel.app/api' }),
  endpoints: (builder) => ({
    // Endpoint para buscar todos os produtos
    getProducts: builder.query<ProdutoType[], void>({
      // 2. COLOQUE O ENDPOINT (o caminho) AQUI:
      query: () => '/ebac_sports'
    })
  })
})

// O RTK Query cria este hook automaticamente
export const { useGetProductsQuery } = apiSlice
