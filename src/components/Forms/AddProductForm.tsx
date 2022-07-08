import React, { useContext, useState } from 'react';
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
import { ShopContext } from '../../contexts/shop.context';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

export const AddProductForm = () => {
  const [priceValue, setPriceValue] = useState<string>('0');
  const [quantityValue, setQuantityValue] = useState<string>('0');
  const context = useContext(ShopContext);

  if (!context) {
    return null;
  }

  const { categories } = context;

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      quantity: 1,
      price: 1,
      sku: '',
      categoryId: '',
      img: '',
    },
    onSubmit: async (values) => {
      try {
        formik.values.price = parseFloat(priceValue);
        formik.values.quantity = parseInt(quantityValue, 10);

        const formData = new FormData();

        for (const [key, value] of Object.entries(values)) {
          if (key !== 'img') {
            formData.append(key, String(value));
          } else {
            formData.append('img', values.img);
          }
        }
        const res = await fetch('http://localhost:3001/product/form', {
          method: 'POST',
          body: formData,
        });

        const data = await res.json();
        console.log('data', data);
      } catch (err) {
        console.error(err);
      }
    },
  });

  if (categories.length === 0) {
    return <LoadingSpinner />;
  }

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
                placeholder="Describe the new product"
                size="sm"
                bg="white"
                variant="filled"
                borderColor="gray.100"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="quantity">Quantity</FormLabel>
              <NumberInput
                max={10000}
                min={1}
                defaultValue={1}
                onChange={(value) => setQuantityValue(value)}
              >
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
              <NumberInput
                max={1000000}
                min={0.1}
                defaultValue={1}
                precision={2}
                onChange={(value) => setPriceValue(value)}
              >
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
              <FormLabel htmlFor="categoryId">Category</FormLabel>
              <Select
                id="categoryId"
                name="categoryId"
                placeholder="Select category"
                value={formik.values.categoryId}
                onChange={formik.handleChange}
              >
                {
                  categories.map((singleCategory) => <option key={singleCategory.id} value={singleCategory.id}>{singleCategory.name}</option>)
                }
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="img">Image</FormLabel>
              <Input
                id="img"
                name="img"
                type="file"
                variant="filled"
                onChange={(e) => {
                  // @ts-ignore: Object is possibly 'null'.
                  formik.setFieldValue('img', e.currentTarget.files[0]);
                }}
                bg="white"
                border="2px"
                borderColor="gray.100"
                accept="image/*"
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
