import {
  ProductImage,
  ProductButtons,
  ProductTitle,
  ProductCard,
} from "../components/product";

import { product } from "../config/constants";
import "../styles/custom-styles.css";

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        <ProductImage className="custom-image" />
        <ProductTitle />
        <ProductButtons className="custom-buttons" />
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
