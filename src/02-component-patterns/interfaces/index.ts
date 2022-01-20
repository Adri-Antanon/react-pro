export interface Product {
  id: string;
  title?: string;
  img?: string;
}

export interface className {
  className?: string;
}

export interface ProductProps extends className {
  product: Product;
}

export interface ProductImageInterface extends className {
  img?: string;
}

export interface ProductTitleInterface extends className {
  title?: string;
}

export interface ProductButtonsProps {
  increaseHandler: (value: number) => void;
  counter: number;
}

export interface ProductContextProps
  extends ProductButtonsProps,
    ProductProps {}
