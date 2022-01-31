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

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductProps extends className, styles {
  product: Product;
  children: (args: ProductCardHandlers) => JSX.Element;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
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

export interface ProductContextProps extends ProductButtonsProps {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  maxCount?: number;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
}
