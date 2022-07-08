import React from 'react';
import {
  Box, Heading, Image, Stack, Text,
} from '@chakra-ui/react';
import { ProductEntity } from 'types';
import { Link } from 'react-router-dom';

interface Props {
  product: ProductEntity
}

export const SingleProduct = ({ product }: Props) => {
  const {
    name, img, description, quantity, price, categoryId, sku, id,
  } = product;
  console.log(description, quantity, sku, id);
  const imgLink = `http://localhost:3001/${img}`;

  return (
    <Link to={`/product/${id}`}>
      <Stack p={{ base: '0 2rem' }}>
        <Image objectFit="cover" src={imgLink} alt={name} maxW="300px" />
        <Text color="teal.600" textTransform="uppercase">
          {categoryId}
        </Text>

        <Heading color="teal.300" size="md" textTransform="capitalize">
          {name}
        </Heading>
        <Box>
          $
          {price}
          <Box as="span" color="gray.600" fontSize="sm">
            / unit
          </Box>
        </Box>
      </Stack>
    </Link>
  );
};
