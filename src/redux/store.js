import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { onproductsApi, productsApi } from './ProductsApi'
import cartReducer from './cartSlice'


export const store = configureStore({
  reducer: {
    carttt: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [onproductsApi.reducerPath]:onproductsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware).concat(onproductsApi.middleware),
})


setupListeners(store.dispatch)