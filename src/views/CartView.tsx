import React, { useContext, useEffect, useState } from 'react';
import { Button, Center } from '@chakra-ui/react';
import { CartResponse } from 'types';
import { ShopContext } from '../contexts/shop.context';
import { LoadingSpinner } from '../components/LoadingSpinner/LoadingSpinner';
import { CartList } from '../components/Cart/CartList';

export const CartView = () => {
  const [load, setLoad] = useState<Boolean>(false);
  const [basketDetails, setBasketDetails] = useState<CartResponse | null>(null);
  const context = useContext(ShopContext);

  if (!context) {
    return null;
  }

  const { cart } = context;

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('http://localhost:3001/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            cart,
          }),
        });

        const data: CartResponse = await res.json();
        setBasketDetails(data);
        setLoad(true);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  if (!load) {
    return <LoadingSpinner />;
  }

  const { basketItems, totalCost, totalItems } = basketDetails as CartResponse;
  return (
    <>
      <CartList basketItems={basketItems} totalItems={totalItems} />
      <Center>
        <Button h="50px" mb="100px">
          {`Buy it ${totalCost.toFixed(2)} $`}
        </Button>
      </Center>
    </>

  );
};
