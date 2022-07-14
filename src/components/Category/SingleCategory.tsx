import React from 'react';
import { CategoryEntity } from 'types';
import {
  Box, Center, Text, Image, Stack, useColorModeValue,
} from '@chakra-ui/react';

interface Props {
  category: CategoryEntity
}

export const SingleCategory = ({ category }: Props) => {
  const { name, img, description } = category;
  const imgLink = `http://localhost:3001/${img}`;

  return (
    <Center py={6}>
      <Box
        maxW="445px"
        height="600px"
        w="full"
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="2xl"
        rounded="md"
        p={6}
        overflow="auto"
      >
        <Box
          h="210px"
          bg="gray.100"
          mt={-6}
          mx={-6}
          mb={6}
          pos="relative"
        >
          <Image
            src={imgLink}
            alt={name}
            fit="cover"
            align="center"
            w="100%"
            h={{ base: '100%', sm: '210px', lg: '210px' }}
          />
        </Box>
        <Stack>
          <Text
            color="green.500"
            textTransform="uppercase"
            fontWeight={800}
            fontSize="sm"
            letterSpacing={1.1}
          >
            {name}
          </Text>
          <Text color="gray.500">
            {description}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
};
