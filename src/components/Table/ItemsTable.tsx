import React, { useContext } from 'react';
import {
  Center,
  Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr,
} from '@chakra-ui/react';
import { SingleTableRow } from './SingleTableRow';
import { ShopContext } from '../../contexts/shop.context';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

export const ItemsTable = () => {
  const context = useContext(ShopContext);

  if (!context) {
    return null;
  }

  const { products } = context;

  if (products.length === 0) {
    return <LoadingSpinner />;
  }

  return (
    <Center>
      <TableContainer>
        <Table variant="striped" colorScheme="teal" width="40vw">
          <TableCaption>Shop product list</TableCaption>
          <Thead>
            <Tr>
              <Th>Names</Th>
              <Th>Price</Th>
              <Th isNumeric>Quantity</Th>
              <Th>SKU</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              products.map((product) => <SingleTableRow key={product.id} product={product} />)
            }
          </Tbody>
        </Table>
      </TableContainer>
    </Center>
  );
};
