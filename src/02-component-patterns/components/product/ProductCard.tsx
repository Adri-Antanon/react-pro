import { useProduct } from "../../hooks/useProduct";

import styles from "../../styles/styles.module.css";
import { ProductProps } from "../../interfaces";

import { Provider } from "../../context/product-context";

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues,
}: ProductProps) => {
  const { counter, increaseHandler } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider
      value={{
        counter,
        increaseHandler,
        product,
        maxCount: initialValues?.maxCount,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children()}
      </div>
    </Provider>
  );
};
