import { createContext } from 'react';
import { CategoryEntity, ProductEntity } from 'types';

interface ShopContextType {
  categories: CategoryEntity[];
  products: ProductEntity[];
  addCategories: (newCategory: CategoryEntity) => void;
  loadCategories: (allCategories: CategoryEntity[]) => void;
  addProducts: (newProducts: ProductEntity) => void;
  loadProducts: (allProducts: ProductEntity[]) => void;
}

export const ShopContext = createContext < ShopContextType | null >(null);
