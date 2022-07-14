import React, { useContext } from 'react';
import {
  Button, Td, Tr, useToast,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { ProductEntity } from 'types';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../contexts/shop.context';

interface Props {
  product: ProductEntity;
}

export const SingleTableRow = (props: Props) => {
  const context = useContext(ShopContext);
  const toast = useToast();

  if (!context) {
    return null;
  }

  const { removeProduct } = context;

  const { product } = props;
  const {
    name, id, price, quantity, sku,
  } = product;

  const deleteProduct = async (e:React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3001/product/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();

      if (data === 'ok') {
        removeProduct(id as string);
        toast({
          title: `Item ${name} deleted from shop`,
          status: 'warning',
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Tr>
      <Td _hover={{
        color: 'red',
      }}
      >
        <Link to={`/product/${id}`}>{name}</Link>
      </Td>
      <Td>{price}</Td>
      <Td isNumeric>{quantity}</Td>
      <Td>{sku}</Td>
      <Td>
        <Button onClick={deleteProduct}><DeleteIcon /></Button>
        <Button ml="5px"><EditIcon /></Button>
      </Td>
    </Tr>
  );
};
