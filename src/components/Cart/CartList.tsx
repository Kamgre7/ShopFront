import React from 'react';
import {
  Box,
  Divider,
  Heading,
  Stack,
} from '@chakra-ui/react';
import { CartEntity } from 'types';
import { SingleCartProduct } from './SingleCartProduct';

interface Props {
  basketItems: CartEntity[];
  totalItems: number;
}

export const CartList = (props:Props) => {
  const { basketItems, totalItems } = props;

  return (
    <Box py={6} px={5} minH="30vh">
      <Stack spacing={4} width="100%" direction="column">
        <Stack
          p={5}
          alignItems="center"
          justifyContent={{
            base: 'flex-start',
            md: 'space-around',
          }}
          direction={{
            base: 'column',
            md: 'row',
          }}
        >
          <Stack
            width={{
              base: '100%',
              md: '40%',
            }}
            textAlign="center"
          >
            <Heading size="lg">
              {` Your shopping cart - total items: ${totalItems}`}
            </Heading>
          </Stack>
          <Stack
            width={{
              base: '100%',
              md: '60%',
            }}
          />
        </Stack>
        {
          basketItems.map(({
            name, img, price, id, userQuantity,
          }) => <SingleCartProduct key={id} itemName={name} id={id} img={img} price={price} userQuantity={userQuantity} />)
        }
        <Divider />
      </Stack>
    </Box>
  );
};
