import React, { useContext, useEffect } from 'react';
import { ProductEntity } from 'types';
import { Center, Flex } from '@chakra-ui/react';
import { ShopContext } from '../../contexts/shop.context';
import { LoadingSpinner } from '../LoadingSpinner';
import { SingleProduct } from './SingleProduct';

export const ProductList = () => {
  const context = useContext(ShopContext);

  if (!context) {
    return null;
  }

  const { products, loadProducts } = context;

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/product');
      const data:ProductEntity[] = await res.json();

      loadProducts(data);
    })();
  }, []);

  if (products.length === 0) {
    return <LoadingSpinner />;
  }

  return (
    <Center>
      <Flex border="2px solid black" direction="column" width="50vw" justify="space-evenly" align="center">
        {
            products.map((singleProduct) => <SingleProduct key={singleProduct.id} product={singleProduct} />)
          }
      </Flex>
    </Center>
  );
};
