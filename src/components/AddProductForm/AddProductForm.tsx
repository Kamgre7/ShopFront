import React from 'react';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput, NumberInputField, NumberInputStepper, Select, Textarea,
  VStack,
} from '@chakra-ui/react';

export const AddProductForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      quantity: 0,
      price: 0,
      sku: '',
      category: '',
      img: '',
    },
    onSubmit: async (values) => {
      try {
        await fetch('http://localhost:3001/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });
      } catch (err) {
        console.error(err);
      }
    },
  });

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md">
        <form onSubmit={formik.handleSubmit}>
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
                placeholder="Here is a sample placeholder"
                size="sm"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="quantity">Quantity</FormLabel>
              <NumberInput max={1000} min={1} defaultValue={1}>
                <NumberInputField
                  id="quantity"
                  name="quantity"
                  onChange={formik.handleChange}
                  value={formik.values.quantity}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="price">Price</FormLabel>
              <NumberInput max={10000} min={0.1} defaultValue={1} precision={2}>
                <NumberInputField
                  id="price"
                  name="price"
                  onChange={formik.handleChange}
                  value={formik.values.price}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="sku">SKU</FormLabel>
              <Input
                id="sku"
                name="sku"
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.sku}
                bg="white"
                border="2px"
                borderColor="gray.100"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="category">Category</FormLabel>
              <Select
                id="category"
                name="category"
                placeholder="Select category"
                value={formik.values.category}
                onChange={formik.handleChange}
              >
                <option>Jewellery</option>
                <option>Car</option>
                <option>Dupa</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="img">Image</FormLabel>
              <Input
                id="img"
                name="img"
                type="file"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.img}
                bg="white"
                border="2px"
                borderColor="gray.100"
              />
            </FormControl>
            <Button type="submit" colorScheme="purple" width="full">
              Add item!
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};
