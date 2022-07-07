import React from 'react';
import { ProductList } from '../components/Product/ProductList';

export const ProductView = () => {
  console.log('productView');
  return (
    <>
      <h1>List of all products</h1>
      <ProductList />
    </>
  );
};
