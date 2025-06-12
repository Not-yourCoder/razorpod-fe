import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../types";

type CartItem = Product & { quantity: number };

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartItem: (state, action) => {
        state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
      },
    clearCart(state) {
      state.cartItems = [];
    },
    updateItemQuantity: (state, action) => {
        const { id, change } = action.payload;
        const item = state.cartItems.find(i => i.id === id);
        if (item) item.quantity = Math.max(0, item.quantity + change);
        state.cartItems = state.cartItems.filter(i => i.quantity > 0);
      },
  },
});

export const { addToCart, removeCartItem, clearCart, updateItemQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
