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

export interface ProductButtonsStyles extends styles, className{}

export interface ProductProps extends className, styles {
  product: Product;
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
