import React, { useContext, useEffect } from 'react';
import { CategoryEntity } from 'types';
import { Center, Flex } from '@chakra-ui/react';
import { SingleCategory } from './SingleCategory';
import { LoadingSpinner } from '../LoadingSpinner';
import { ShopContext } from '../../contexts/shop.context';

export const CategoryList = () => {
  const context = useContext(ShopContext);
  if (!context) {
    return null;
  }

  const { categories, loadCategories } = context;

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/category');
      const data:CategoryEntity[] = await res.json();

      loadCategories(data);
    })();
  }, []);

  if (categories.length === 0) {
    return <LoadingSpinner />;
  }

  /*  const [category, setCategory] = useState<CategoryEntity[] | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/category');
      const data:CategoryEntity[] = await res.json();

      setCategory(data);
    })();
  }, []);

  if (category === null) {
    return (
      <LoadingSpinner />
    );
  } */

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
