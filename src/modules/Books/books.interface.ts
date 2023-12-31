export interface FilterOptions {
  page?: number;
  size?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  minPrice?: number;
  maxPrice?: number;
  category?: string;
  search?: string;
}
