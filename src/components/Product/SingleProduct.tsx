import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import { ProductEntity } from 'types';

interface Props {
  product: ProductEntity
}

export const SingleProduct = ({ product }: Props) => {
  const {
    name, img, description, quantity, price, categoryId, sku, id,
  } = product;
  const imgLink = `http://localhost:3001/${img}`;
  return (
    <Flex border="2px solid black" width="400px" mt="20px" mb="20px" minHeight="200px">

      {
             img && (
             <Box width="100%">
               <Image
                 boxSize="100%"
                 src={imgLink}
                 objectFit="cover"
                 alt={img}
               />
             </Box>
             )
          }

      <Box>
        <h1>
          <strong>
            {name}
            <br />
            {quantity}
            <br />
            {price}
            <br />
            {categoryId}
            <br />
            {sku}
            <br />
            {id}
          </strong>
          <br />
          <p>{description}</p>
        </h1>
      </Box>
    </Flex>
  );
};
