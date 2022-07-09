import React, { useContext } from 'react';
import {
  Box, Center, Heading, Image, Stack, Text, useColorModeValue,
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
    <Center py={12}>
      <Link to={`/product/${id}`}>
        <Box
          role="group"
          p={6}
          maxW="330px"
          w="full"
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow="2xl"
          rounded="lg"
          pos="relative"
          zIndex={1}
        >
          <Box
            rounded="lg"
            mt={-12}
            pos="relative"
            height="230px"
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${imgLink})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}
          >
            <Image
              rounded="lg"
              height={230}
              width={282}
              objectFit="cover"
              src={imgLink}
            />
          </Box>
          <Stack pt={10} align="center">
            <Text color="gray.500" fontSize="sm" textTransform="uppercase">
              {categoryName}
            </Text>
            <Heading fontSize="2xl" fontFamily="body" fontWeight={500}>
              {name}
            </Heading>
            <Stack direction="row" align="center">
              <Text fontWeight={800} fontSize="xl">
                $
                {price}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Link>
    </Center>
  );
};
