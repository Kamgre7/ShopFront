import React, { useContext } from 'react';
import {
  Button, Heading, Image, Stack, Text, useToast,
} from '@chakra-ui/react';
import { ShopContext } from '../../contexts/shop.context';

interface Props {
  id: string;
  itemName: string;
  img: string;
  price: number;
  /*
  quantity: number;
*/
  userQuantity: number;
}

export const SingleCartProduct = ({
  id, itemName, img, price, /* quantity, */ userQuantity,
}: Props) => {
  const context = useContext(ShopContext);

  if (!context) {
    return null;
  }

  const { removeCart /* loadCart */ } = context;

  const toast = useToast();
  const imgLink = `http://localhost:3001/${img}`;

  const removeItemFromBasket = (e:React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    removeCart(id);
    toast({
      title: `Item ${itemName} deleted from basket`,
      status: 'info',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: 'flex-start',
        md: 'space-around',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}
      alignItems={{ md: 'center' }}
    >
      <Image
        src={imgLink}
        alt={itemName}
        align="center"
        w="100px"
        h={{ base: '100%', sm: '100px', lg: '100px' }}
      />
      <Heading size="md">{itemName}</Heading>
      <Heading size="xl">{userQuantity}</Heading>
      <Heading size="xl">
        {`${price} $` }
        <Text fontSize="xs">/1piece</Text>
      </Heading>
      <Stack>
        <Button
          size="md"
          onClick={removeItemFromBasket}
        >
          Delete
        </Button>
      </Stack>
    </Stack>
  );
};
