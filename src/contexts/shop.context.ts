import { createContext } from 'react';
import { CartEntityProperty, CategoryEntity, ProductEntity } from 'types';

interface ShopContextType {
  categories: CategoryEntity[];
  products: ProductEntity[];
  cart: CartEntityProperty[];
  addCategories: (newCategory: CategoryEntity) => void;
  loadCategories: (allCategories: CategoryEntity[]) => void;
  addProducts: (newProducts: ProductEntity) => void;
  loadProducts: (allProducts: ProductEntity[]) => void;
  removeProduct: (productId: string) =>void;
  addCart: (newItem: CartEntityProperty)=> void;
  loadCart:(allItems: CartEntityProperty[])=>void;
  removeCart:(itemId: string) => void;
}

export const ShopContext = createContext < ShopContextType | null >(null);
