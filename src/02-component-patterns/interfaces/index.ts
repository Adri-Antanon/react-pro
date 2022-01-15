export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductProps {
  product: Product;
}
