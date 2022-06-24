import * as React from 'react';
import {
  ChakraProvider,
  Box, Flex,
} from '@chakra-ui/react';
import { AddProductForm } from './components/AddProductForm/AddProductForm';

export const App = () => (
  <ChakraProvider>
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box textAlign="center" fontSize="xl" color="black" bg="white">
        <AddProductForm />
      </Box>
    </Flex>
  </ChakraProvider>
);
