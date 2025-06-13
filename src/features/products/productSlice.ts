// import {
//   createSlice,
//   createAsyncThunk,
//   type PayloadAction,
// } from "@reduxjs/toolkit";
// import type {
//   PaginatedResponse,
//   Product,
//   ProductFilters,
//   ProductState,
// } from "../../store/types";

// // Async thunk for fetching products
// export const fetchProducts = createAsyncThunk<
//   Product[],
//   { page?: number; limit?: number; category?: string } | void,
//   { rejectValue: string }
// >("products/fetchProducts", async (params, { rejectWithValue }) => {
//   try {
//     const queryParams = new URLSearchParams();
//     if (params?.page) queryParams.append("page", params.page.toString());
//     if (params?.limit) queryParams.append("limit", params.limit.toString());
//     if (params?.category && params.category !== "all") {
//       queryParams.append("category", params.category);
//     }

//     const response = await fetch(`/api/products?${queryParams}`);

//     if (!response.ok) {
//       throw new Error("Failed to fetch products");
//     }

//     const data: PaginatedResponse<Product> = await response.json();
//     return data.data;
//   } catch (error) {
//     return rejectWithValue(
//       error instanceof Error ? error.message : "Unknown error"
//     );
//   }
// });

// // Async thunk for fetching single product
// export const fetchProductById = createAsyncThunk<
//   Product,
//   number,
//   { rejectValue: string }
// >("products/fetchProductById", async (productId, { rejectWithValue }) => {
//   try {
//     const response = await fetch(`/api/products/${productId}`);

//     if (!response.ok) {
//       throw new Error("Failed to fetch product");
//     }

//     const data: Product = await response.json();
//     return data;
//   } catch (error) {
//     return rejectWithValue(
//       error instanceof Error ? error.message : "Unknown error"
//     );
//   }
// });

// // Async thunk for searching products
// export const searchProducts = createAsyncThunk<
//   Product[],
//   string,
//   { rejectValue: string }
// >("products/searchProducts", async (searchTerm, { rejectWithValue }) => {
//   try {
//     const response = await fetch(
//       `/api/products/search?q=${encodeURIComponent(searchTerm)}`
//     );

//     if (!response.ok) {
//       throw new Error("Failed to search products");
//     }

//     const data: Product[] = await response.json();
//     return data;
//   } catch (error) {
//     return rejectWithValue(
//       error instanceof Error ? error.message : "Unknown error"
//     );
//   }
// });

// const initialState: ProductState = {
//   items: [],
//   selectedProduct: null,
//   loading: false,
//   error: null,
//   filters: {
//     category: "all",
//     searchTerm: "",
//     sortBy: "title",
//     priceRange: {
//       min: 0,
//       max: 1000,
//     },
//   },
//   categories: ["all", "beauty", "electronics", "clothing", "home"],
// };

// const productSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     setSearchTerm: (state, action: PayloadAction<string>) => {
//       state.filters.searchTerm = action.payload;
//     },

//     setCategory: (state, action: PayloadAction<string>) => {
//       state.filters.category = action.payload;
//     },

//     setSortBy: (state, action: PayloadAction<ProductFilters["sortBy"]>) => {
//       state.filters.sortBy = action.payload;
//     },

//     setPriceRange: (
//       state,
//       action: PayloadAction<{ min: number; max: number }>
//     ) => {
//       state.filters.priceRange = action.payload;
//     },

//     setFilters: (state, action: PayloadAction<Partial<ProductFilters>>) => {
//       state.filters = { ...state.filters, ...action.payload };
//     },

//     clearSelectedProduct: (state) => {
//       state.selectedProduct = null;
//     },

//     clearError: (state) => {
//       state.error = null;
//     },

//     setCategories: (state, action: PayloadAction<string[]>) => {
//       state.categories = ["all", ...action.payload];
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Fetch products cases
//       .addCase(fetchProducts.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || "Failed to fetch products";
//       })

//       // Fetch single product cases
//       .addCase(fetchProductById.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchProductById.fulfilled, (state, action) => {
//         state.loading = false;
//         state.selectedProduct = action.payload;
//       })
//       .addCase(fetchProductById.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || "Failed to fetch product";
//       })

//       // Search products cases
//       .addCase(searchProducts.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(searchProducts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload;
//       })
//       .addCase(searchProducts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || "Failed to search products";
//       });
//   },
// });

// export const {
//   setSearchTerm,
//   setCategory,
//   setSortBy,
//   setPriceRange,
//   setFilters,
//   clearSelectedProduct,
//   clearError,
//   setCategories,
// } = productSlice.actions;

// export default productSlice.reducer;
