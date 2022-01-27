import { useState } from "react";
import {
  ProductImage,
  ProductButtons,
  ProductTitle,
  ProductCard,
} from "../components/product";

import { products, product2, product } from "../config/constants";
import "../styles/custom-styles.css";
import { ProductInCart, Product, onChangeArgs } from "../interfaces/index";

const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ product, count }: onChangeArgs) => {
    setShoppingCart((previousState) => {
      const productInCart: ProductInCart = previousState[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...previousState,
          [product.id]: productInCart,
        };
      }

      // Remove product
      const { [product.id]: toDelete, ...rest } = previousState;

      return { ...rest };

      // Implementación sencilla
      //   if (count === 0) {
      //     const { [product.id]: toDelete, ...rest } = previousState;

      //     return { ...rest };
      //   }

      //   return { ...previousState, [product.id]: { ...product, count } };
    });
  };

  return (
    <>
      <div>
        <h1>Shopping Store</h1>
        <hr />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="bg-dark text-white"
              onChange={onProductCountChange}
              value={shoppingCart[product.id]?.count || 0}
            >
              <ProductImage className="custom-image" />
              <ProductTitle />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))}
        </div>
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            style={{ width: "10rem" }}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              className="custom-buttons"
            />
          </ProductCard>
        ))}
      </div>
    </>
  );
};

export default ShoppingPage;
