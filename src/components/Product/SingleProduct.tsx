import React, { useContext } from 'react';
import {
  Box, Heading, Image, Stack, Text,
} from '@chakra-ui/react';
import { CategoryEntity, ProductEntity } from 'types';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../contexts/shop.context';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

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
    name, img, price, categoryId, id,
  } = product;

  const findCategoryName = categories.find((category) => category.id === categoryId) as CategoryEntity;
  const categoryName = findCategoryName.name;

  const imgLink = `http://localhost:3001/${img}`;

  return (
    <Stack p={{ base: '0 2rem' }}>
      <Link to={`/product/${id}`}>
        <Image objectFit="cover" src={imgLink} alt={name} maxW="300px" minW="250px" />
        <Text color="teal.600" textTransform="uppercase">
          {categoryName}
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
      </Link>
    </Stack>
  );
};
