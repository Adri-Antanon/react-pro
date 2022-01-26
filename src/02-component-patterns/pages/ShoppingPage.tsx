import { useState } from "react";
import {
  ProductImage,
  ProductButtons,
  ProductTitle,
  ProductCard,
} from "../components/product";

import { products, product2, product } from "../config/constants";
import "../styles/custom-styles.css";
import { ProductInCart, Product } from "../interfaces/index";

const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    product,
    count,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((previousState) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = previousState;

        return { ...rest };
      }

      return { ...previousState, [product.id]: { ...product, count } };
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
            >
              <ProductImage className="custom-image" />
              <ProductTitle />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))}
        </div>

        <div>
          <code>{JSON.stringify(shoppingCart, null, 5)}</code>
        </div>
      </div>
      <div className="shopping-cart">
        <ProductCard
          product={product2}
          className="bg-dark text-white"
          style={{ width: "10rem" }}
        >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          product={product}
          className="bg-dark text-white"
          style={{ width: "10rem" }}
        >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </>
  );
};

export default ShoppingPage;
