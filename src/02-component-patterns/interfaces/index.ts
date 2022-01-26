import { product } from "../config/constants";
export interface Product {
  id: string;
  title?: string;
  img?: string;
}

export interface className {
  className?: string;
}
export interface styles {
  style?: React.CSSProperties;
}

export interface ProductButtonsStyles extends styles, className {}

export interface ProductProps extends className, styles {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
}

export interface ProductImageInterface extends className, styles {
  img?: string;
}

export interface ProductTitleInterface extends className, styles {
  title?: string;
}

export interface ProductButtonsProps extends styles {
  increaseHandler: (value: number) => void;
  counter: number;
}

export interface ProductContextProps
  extends ProductButtonsProps,
    ProductProps {}

export interface ProductInCart extends Product {
  count: number;
}
