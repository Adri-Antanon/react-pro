import { useState } from "react";
import { ProductInCart, onChangeArgs } from "../interfaces";
import { products } from "../config/constants";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ product, count }: onChangeArgs) => {
    setShoppingCart((previousState) => {
      // Implementación compleja
      //   const productInCart: ProductInCart = previousState[product.id] || {
      //     ...product,
      //     count: 0,
      //   };

      //   if (Math.max(productInCart.count + count, 0) > 0) {
      //     productInCart.count += count;
      //     return {
      //       ...previousState,
      //       [product.id]: productInCart,
      //     };
      //   }

      // Remove product
      //   const { [product.id]: toDelete, ...rest } = previousState;

      //   return { ...rest };

      // Implementación sencilla
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = previousState;

        return { ...rest };
      }

      return { ...previousState, [product.id]: { ...product, count } };
    });
  };

  return { shoppingCart, onProductCountChange };
};
