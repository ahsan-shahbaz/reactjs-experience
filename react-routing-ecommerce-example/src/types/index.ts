// src/types/index.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number; // New optional sale price
  stock: number; // New stock attribute
  hotItem?: boolean; // New hot item attribute
  mostSelling?: boolean; // New most selling product flag
  description: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
}
