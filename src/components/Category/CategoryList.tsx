import React, { useContext } from 'react';
import { Flex, Grid } from '@chakra-ui/react';
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
    <Flex
      direction="column"
      justifyContent="center"
      maxW={{ xl: '1200px' }}
      m="0 auto"
      minH="100vh"
    >
      <Grid
        w="full"
        gridGap="5"
        gridTemplateColumns="repeat( auto-fit, minmax(300px, 1fr) )"
      >
        {
            categories.map((singleCategory) => <SingleCategory key={singleCategory.id} category={singleCategory} />)
          }
      </Grid>
    </Flex>

  );
};
