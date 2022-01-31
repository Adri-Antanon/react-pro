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
        {({ reset, increaseBy, count, isMaxCountReached }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle />
            <ProductButtons className="custom-buttons" />
            <button onClick={reset}>Reset</button>
            {isMaxCountReached && (
              <button onClick={() => increaseBy(-2)}>-2</button>
            )}
            {!isMaxCountReached && (
              <button onClick={() => increaseBy(2)}>+2</button>
            )}
            <span>{count}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
