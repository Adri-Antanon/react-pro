import { useProduct } from "../../hooks/useProduct";

import styles from "../../styles/styles.module.css";
import { ProductProps } from "../../interfaces";

import { Provider } from "../../context/product-context";

export const ProductCard: React.FC<ProductProps> = ({
  product,
  children,
  className,
}) => {
  const { counter, increaseHandler } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseHandler,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`}>{children}</div>
    </Provider>
  );
};
