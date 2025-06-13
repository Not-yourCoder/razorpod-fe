// Product types matching your API structure
export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

// Cart types
export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  totalPrice: number;
  thumbnail: string;
  discountPercentage?: number;
}

export interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
  isOpen: boolean;
}

// Product state types
export interface ProductFilters {
  category: string;
  searchTerm: string;
  sortBy: "title" | "price-low" | "price-high" | "rating";
  priceRange: {
    min: number;
    max: number;
  };
}

export interface ProductState {
  products: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: string | null;
  sortBy: "name-asc" | "name-desc" | "price-asc" | "price-desc" | null;
  // filters: ProductFilters;
  // categories: string[];
}

// User types
export interface User {
  id: number;
  email: string;
  name: string;
  avatar?: string;
  role: "user" | "admin";
}

export interface UserState {
  currentUser: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  wishlist: Product[];
}

// API response types
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Auth types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
  confirmPassword: string;
}

export interface Category {
  slug: string;
  name: string;
  url: string;
}
