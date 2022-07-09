import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoryEntity, ProductEntity } from 'types';
import {
  Box, Button, Center, Heading, Image, Text,
} from '@chakra-ui/react';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { ShopContext } from '../../contexts/shop.context';
import './SingleProductDetails.css';

export const SingleProductDetails = () => {
  const context = useContext(ShopContext);

  if (!context) {
    return null;
  }

  const [product, setProduct] = useState<ProductEntity | null>(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`http://localhost:3001/product/${id}`);
        const data: ProductEntity = await res.json();

        setProduct(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const { categories } = context;

  if (product === null || categories.length === 0) {
    return <LoadingSpinner />;
  }

  const {
    name, img, price, categoryId, quantity, sku, description,
  } = product;

  const imgLink = `http://localhost:3001/${img}`;

  const findCategoryName = categories.find((category) => category.id === categoryId) as CategoryEntity;
  const categoryName = findCategoryName.name;

  return (
    <Center>
      <Box className="single-item" width="60vw" p="10px" borderRadius="5px">
        <Box className="product-image" maxW="500px">
          <Image objectFit="cover" src={imgLink} alt={name} />
        </Box>
        <Box className="product-info" width="100%">

          <Heading color="teal.300" size="md" textTransform="capitalize" mb="10px">
            {name}
          </Heading>

          <Text color="teal.600" textTransform="uppercase">
            {categoryName}
          </Text>

          <Text color="teal.600" textTransform="uppercase">
            {sku}
          </Text>
          Price: $
          {price}

          <Box as="span" color="gray.600" fontSize="sm">
            / unit
          </Box>

          <Text color="teal.600" textTransform="uppercase">
            Item in stock:
            {' '}
            {quantity}
          </Text>

          <Button colorScheme="teal" variant="solid" mt="10px" onClick={() => console.log('dziala')}>
            Add item
          </Button>

        </Box>
        <Box className="description">
          <Text color="teal.600">
            {description}
          </Text>
        </Box>
      </Box>
    </Center>
  );
};
