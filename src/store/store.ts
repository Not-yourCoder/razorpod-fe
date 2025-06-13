import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productSlice";
import categoryReducer from "./slices/categorySlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoryReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
