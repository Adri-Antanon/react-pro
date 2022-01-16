import { useContext } from "react";

import { ProductTitleInterface } from "../../interfaces";
import ProductContext from "../../context/product-context";

import styles from "../../styles/styles.module.css";

export const ProductTitle: React.FC<ProductTitleInterface> = ({ title }) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={styles.productDescription}>
      {title ? title : product.title}
    </span>
  );
};
