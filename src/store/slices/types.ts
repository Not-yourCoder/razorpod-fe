import type { Category } from "../types";

export type CategoryState = {
  categories: Category[];
  selectedCategory: string | null;
  loading: boolean;
  error: string | null;
};