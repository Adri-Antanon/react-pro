import { createContext } from "react";
import { ProductContextProps } from "../interfaces";

const ProductContext = createContext({} as ProductContextProps);

export const { Provider } = ProductContext;

export default ProductContext;
