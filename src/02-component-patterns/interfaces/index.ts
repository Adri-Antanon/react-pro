export interface Product {
  id: string;
  title?: string;
  img?: string;
}

export interface ProductProps {
  product: Product;
  className?: string;
}

export interface ProductImageInterface {
  img?: string;
}

export interface ProductTitleInterface {
  title?: string;
}

export interface ProductButtonsProps {
  increaseHandler: (value: number) => void;
  counter: number;
}

export interface ProductContextProps
  extends ProductButtonsProps,
    ProductProps {}
