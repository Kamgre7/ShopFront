import React, { useContext } from 'react';
import { Center, Flex } from '@chakra-ui/react';
import { SingleCategory } from './SingleCategory';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { ShopContext } from '../../contexts/shop.context';

export const CategoryList = () => {
  const context = useContext(ShopContext);

  if (!context) {
    return null;
  }

  const { categories } = context;

  if (categories.length === 0) {
    return <LoadingSpinner />;
  }

  return (
    <Center>
      <Flex border="2px solid black" direction="column" width="50vw" justify="space-evenly" align="center">
        {
        categories.map((singleCategory) => <SingleCategory key={singleCategory.id} category={singleCategory} />)
        }
      </Flex>
    </Center>
  );
};
