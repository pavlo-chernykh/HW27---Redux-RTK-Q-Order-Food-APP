import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./productsApi";
import productsReducer from "./productsSlice"

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    products: productsReducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
})