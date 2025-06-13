import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import type { Product, ProductState } from "../types";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    return res.data.products;
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id: number) => {
    const res = await axios.get(`http://localhost:5000/api/products/${id}`);
    return res.data;
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (category: string) => {
    const response = await axios.get(
      `https://dummyjson.com/products/category/${category}`
    );
    return response.data.products;
  }
);

const initialState: ProductState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
  sortBy : null
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    selectProduct(state, action: PayloadAction<Product | null>) {
      console.log("Selected Product", action);
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setSortBy(state, action: PayloadAction<ProductState["sortBy"]>) {
      state.sortBy = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        const existing = state.products.find((p) => p.id === action.payload.id);
        if (!existing) {
          state.products.push(action.payload);
        }
      });
    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const {
  setProducts,
  selectProduct,
  clearSelectedProduct,
  setLoading,
  setError,
  setSortBy,
} = productsSlice.actions;

export default productsSlice.reducer;
