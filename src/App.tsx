import * as React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { AddProductForm } from './components/Forms/AddProductForm';
import { Header } from './components/Header/Header';
import { ProductsView } from './views/ProductsView';
import { RankingView } from './views/RankingView';
import { NotFoundView } from './views/NotFoundView';
import { CategoriesView } from './views/CategoriesView';
import { AddCategoryForm } from './components/Forms/AddCategoryForm';
import { BasketView } from './views/BasketView';
import { RegisterForm } from './components/Forms/RegisterForm';
import { LoginForm } from './components/Forms/LoginForm';

export const App = () => (
  <ChakraProvider>
    <Header />
    <Routes>
      <Route path="/products" element={<ProductsView />} />
      <Route path="/products/form" element={<AddProductForm />} />
      <Route path="/categories/" element={<CategoriesView />} />
      <Route path="/categories/form" element={<AddCategoryForm />} />
      <Route path="/ranking" element={<RankingView />} />
      <Route path="/basket" element={<BasketView />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/*" element={<NotFoundView />} />
    </Routes>
    {/*   <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box textAlign="center" fontSize="xl" color="black" bg="white">
        <AddProductForm />
      </Box>
    </Flex> */}
  </ChakraProvider>
);
