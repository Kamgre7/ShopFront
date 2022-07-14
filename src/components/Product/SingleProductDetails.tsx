import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue, useToast,
  VStack,
} from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/all';
import { ProductEntity, CartEntityProperty } from 'types';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { ShopContext } from '../../contexts/shop.context';

export const SingleProductDetails = () => {
  const [product, setProduct] = useState<ProductEntity | null>(null);
  const { id: idRoute } = useParams();

  const context = useContext(ShopContext);

  if (!context) {
    return null;
  }

  const { cart, loadCart } = context;
  const toast = useToast();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`http://localhost:3001/product/${idRoute}`);
        const data: ProductEntity = await res.json();

        setProduct(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  if (product === null) {
    return <LoadingSpinner />;
  }

  const {
    name, img, price, quantity, sku, description, id,
  } = product;

  const imgLink = `http://localhost:3001/${img}`;

  const addToCart = async (e:React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const cartItems:CartEntityProperty[] = [...cart];
    const findExistingItem = cartItems.findIndex((item) => item.productId === id);
    if (findExistingItem !== -1) {
      cartItems[findExistingItem].userQuantity += 1;
    } else {
      cartItems.push(
        {
          productId: id as string,
          userQuantity: 1,
        },
      );
    }

    localStorage.setItem('shopCart', JSON.stringify(cartItems));
    loadCart(cartItems);
    toast({
      title: `${name} added to basket`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="7xl">
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded="md"
            alt={name}
            src={imgLink}
            fit="cover"
            align="center"
            w="100%"
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as="header">
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              {name}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize="2xl"
            >
              {`$${price} USD`}
            </Text>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize="xl"
            >
              {`In stock: ${quantity}`}
            </Text>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize="l"
            >
              {`SKU: ${sku}`}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction="column"
            divider={(
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
                )}
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize="2xl"
                fontWeight="300"
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore
              </Text>
              <Text fontSize="lg">
                {description}
              </Text>
            </VStack>
          </Stack>
          <Button
            rounded="none"
            w="full"
            mt={8}
            size="lg"
            py="7"
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform="uppercase"
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
            onClick={addToCart}
          >
            Add to cart
          </Button>
          <Stack direction="row" alignItems="center" justifyContent="center">
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};
