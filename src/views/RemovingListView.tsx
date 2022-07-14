import React, { useContext } from 'react';
import { ShopContext } from '../contexts/shop.context';
import { LoadingSpinner } from '../components/LoadingSpinner/LoadingSpinner';
import { ItemsTable } from '../components/Table/ItemsTable';

export const RemovingListView = () => {
  const context = useContext(ShopContext);

  if (!context) {
    return null;
  }

  const { products, categories } = context;

  if (products.length === 0 || categories.length === 0) {
    return <LoadingSpinner />;
  }

  return (
    <ItemsTable />
  );
};
