import { ProductImageInterface } from "../../interfaces/index";
import styles from "../../styles/styles.module.css";

import noImage from "../../assets/no-image.jpg";
import { useContext } from "react";
import ProductContext from "../../context/product-context";

export const ProductImage: React.FC<ProductImageInterface> = ({ img = "", className }) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return <img className={`${styles.productImg} ${className}`} src={imgToShow} alt="Product" />;
};
