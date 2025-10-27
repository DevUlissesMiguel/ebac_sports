import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice } from './apiSlice'
import cartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    // Reducer do carrinho
    cart: cartReducer,
    // Reducer do RTK Query
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

setupListeners(store.dispatch)

// Tipos para usar no TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
