import { useProduct } from "../../hooks/useProduct";

import styles from "../../styles/styles.module.css";
import { ProductProps } from "../../interfaces";

import { Provider } from "../../context/product-context";

export const ProductCard: React.FC<ProductProps> = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
}) => {
  const { counter, increaseHandler } = useProduct({ onChange, product, value });

  return (
    <Provider
      value={{
        counter,
        increaseHandler,
        product,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};
