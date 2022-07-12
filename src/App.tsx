import * as React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CartEntityProperty, CategoryEntity, ProductEntity } from 'types';
import { useEffect, useState } from 'react';
import { AddProductForm } from './components/Forms/AddProductForm';
import { Header } from './components/Header/Header';
import { ProductView } from './views/ProductView';
import { RankingView } from './views/RankingView';
import { NotFoundView } from './views/NotFoundView';
import { CategoryView } from './views/CategoryView';
import { AddCategoryForm } from './components/Forms/AddCategoryForm';
import { CartView } from './views/CartView';
import { RegisterForm } from './components/Forms/RegisterForm';
import { LoginForm } from './components/Forms/LoginForm';
import { ShopContext } from './contexts/shop.context';
import { SingleProductDetails } from './components/Product/SingleProductDetails';
import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';

export const App = () => {
  const [categories, setCategories] = useState<CategoryEntity[]>([]);
  const [products, setProducts] = useState<ProductEntity[]>([]);
  const [cart, setCart] = useState<CartEntityProperty[]>([]);

  const loadCategories = (allCategories: CategoryEntity[]) => {
    setCategories(allCategories);
  };

  const loadProducts = (allProducts: ProductEntity[]) => {
    setProducts(allProducts);
  };

  const addCategories = (category: CategoryEntity) => {
    setCategories((prev) => [...prev, category]);
  };

  const addProducts = (product: ProductEntity) => {
    setProducts((prev) => [...prev, product]);
  };

  const addCart = (item:CartEntityProperty) => {
    setCart((prev) => [...prev, item]);
  };

  const loadCart = (allItems:CartEntityProperty[]) => {
    setCart(allItems);
  };

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/product');
      const data:ProductEntity[] = await res.json();

      loadProducts(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/category');
      const data:CategoryEntity[] = await res.json();

      loadCategories(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const cartItems:CartEntityProperty[] = (localStorage.getItem('shopCart')) ? JSON.parse(localStorage.getItem('shopCart') as string) : [];
      loadCart(cartItems);
    })();
  }, []);

  if (products.length === 0 || categories.length === 0) {
    return <LoadingSpinner />;
  }

  return (
    <ChakraProvider>
      {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
      <ShopContext.Provider value={{
        categories,
        products,
        cart,
        addCategories,
        addProducts,
        loadCategories,
        loadProducts,
        addCart,
        loadCart,
      }}
      >
        <Header />
        <Routes>
          <Route path="/product" element={<ProductView />} />
          <Route path="/product/:id" element={<SingleProductDetails />} />
          <Route path="/product/form" element={<AddProductForm />} />
          <Route path="/category/" element={<CategoryView />} />
          <Route path="/category/form" element={<AddCategoryForm />} />
          <Route path="/ranking" element={<RankingView />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/"
            element={
              <Navigate replace to="/product" />
          }
          />
          <Route path="/*" element={<NotFoundView />} />
        </Routes>
      </ShopContext.Provider>
    </ChakraProvider>
  );
};
