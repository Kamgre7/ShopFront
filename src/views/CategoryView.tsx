import React from 'react';
import { CategoryList } from '../components/Category/CategoryList';

export const CategoryView = () => {
  console.log('Category list');
  return (
    <>
      <h1>List of all categories</h1>
      <CategoryList />
    </>

  );
};
