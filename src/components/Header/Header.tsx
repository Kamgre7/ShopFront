import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import { NavigationBar } from './NavigationBar';

export const Header = () => (
  <Center>
    <Box p={5} w="55vw" mt="5px" textAlign="center">
      <NavigationBar />
    </Box>
  </Center>
);
