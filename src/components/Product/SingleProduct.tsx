import React, { useContext } from 'react';
import {
  Box, Heading, Image, Stack, Text,
} from '@chakra-ui/react';
import { CategoryEntity, ProductEntity } from 'types';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../contexts/shop.context';
import { LoadingSpinner } from '../LoadingSpinner';

interface Props {
  product: ProductEntity
}

export const SingleProduct = ({ product }: Props) => {
  const context = useContext(ShopContext);

  if (!context) {
    return null;
  }

  const { categories } = context;

  if (categories.length === 0) {
    return <LoadingSpinner />;
  }

  const {
    name, img, description, quantity, price, categoryId, sku, id,
  } = product;
  const categoryName = categories.find((category) => category.id === categoryId) as CategoryEntity;
  console.log(description, quantity, sku);
  console.log(categoryName.name);

  const imgLink = `http://localhost:3001/${img}`;

  return (
    <Link to={`/product/${id}`}>
      <Stack p={{ base: '0 2rem' }}>
        <Image objectFit="cover" src={imgLink} alt={name} maxW="300px" minW="250px" />
        <Text color="teal.600" textTransform="uppercase">
          {categoryName.name}
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
