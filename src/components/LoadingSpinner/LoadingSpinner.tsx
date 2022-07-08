import React from 'react';
import { Center, Spinner } from '@chakra-ui/react';

export const LoadingSpinner = () => (
  <Center>
    <Spinner
      mt="100px"
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="red.500"
      size="xl"
    />
  </Center>
);
