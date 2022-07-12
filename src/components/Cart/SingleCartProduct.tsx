import React from 'react';
import {
  Button, Heading, Image, Stack, Text,
} from '@chakra-ui/react';

interface Props {
  /* id: string; */
  itemName: string;
  img: string;
  price: number;
  /*
  quantity: number;
*/
  userQuantity: number;
}

export const SingleCartProduct = ({
  /* id, */itemName, img, price, /* quantity, */ userQuantity,
}: Props) => {
  const imgLink = `http://localhost:3001/${img}`;

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
        >
          Delete
        </Button>
      </Stack>
    </Stack>
  );
};
