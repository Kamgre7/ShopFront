import React from 'react';
import { CategoryEntity } from 'types';
import { Box, Flex, Image } from '@chakra-ui/react';

interface Props {
  category: CategoryEntity
}

export const SingleCategory = ({ category }: Props) => {
  const { name, img, description } = category;
  const imgLink = `http://localhost:3001/${img}`;
  return (
    <Flex border="2px solid black" width="400px" mt="20px" mb="20px" minHeight="200px">
      <Box width="100%">
        <Image
          boxSize="100%"
          src={imgLink}
          objectFit="cover"
          alt={img}
        />
      </Box>
      <Box>
        <h1>
          <strong>{name}</strong>
          <br />
          <p>{description}</p>
        </h1>
      </Box>
    </Flex>
  );
};
