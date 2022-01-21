import { useState } from "react";
import {
  ProductImage,
  ProductButtons,
  ProductTitle,
  ProductCard,
} from "../components/product";

import { products, product2, product } from "../config/constants";
import "../styles/custom-styles.css";
import { ProductInCart } from "../interfaces/index";

const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});
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
            >
              <ProductImage className="custom-image" />
              <ProductTitle />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))}
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
      </div>
    </>
  );
};

export default ShoppingPage;
