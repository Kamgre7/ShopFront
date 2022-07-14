import React, { useContext } from 'react';
import { Flex, Grid } from '@chakra-ui/react';
import { ShopContext } from '../../contexts/shop.context';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { SingleProduct } from './SingleProduct';

export const ProductList = () => {
  const context = useContext(ShopContext);

  if (!context) {
    return null;
  }

  const { products } = context;

  if (products.length === 0) {
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
        {products.map((singleProduct) => (
          <SingleProduct key={singleProduct.id} product={singleProduct} />
        ))}
      </Grid>
    </Flex>
  );
};
