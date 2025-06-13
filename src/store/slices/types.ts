export type CategoryState = {
  categories: string[];
  selectedCategory: string | null;
  loading: boolean;
  error: string | null;
};