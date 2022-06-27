import React from 'react';
import { useFormik } from 'formik';
import {
  Box, Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';

export const AddCategoryForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      photo: '',
    },
    onSubmit: async (values) => {
      try {
        const formData = new FormData();

        // eslint-disable-next-line no-restricted-syntax
        for (const [key, value] of Object.entries(values)) {
          if (key !== 'photo') {
            formData.append(key, String(value));
          } else {
            formData.append('photo', values.photo);
          }
        }

        await fetch('http://localhost:3001/categories/', {
          method: 'POST',
          body: formData,
        });
      } catch (err) {
        console.error(err);
      }
    },
  });

  return (
    <Flex bg="gray.100" align="center" justify="center" h="92vh">
      <Box bg="white" p={6} rounded="md">
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                name="name"
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.name}
                bg="white"
                border="2px"
                borderColor="gray.100"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="description">Description</FormLabel>
              <Textarea
                id="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                placeholder="Describe the new category"
                size="sm"
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="photo">Image</FormLabel>
              <Input
                id="photo"
                name="photo"
                type="file"
                variant="filled"
                onChange={(e) => {
                  // @ts-ignore: Object is possibly 'null'.
                  formik.setFieldValue('photo', e.currentTarget.files[0]);
                }}
                bg="white"
                border="2px"
                borderColor="gray.100"
                accept="image/*"
              />
            </FormControl>
            <Button type="submit" colorScheme="purple" width="full">
              Add category!
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};
