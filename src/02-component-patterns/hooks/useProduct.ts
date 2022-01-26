import { useState } from "react";
import { useProductArgs } from "../interfaces/index";

export const useProduct = ({ product, onChange }: useProductArgs) => {
  const [counter, setCounter] = useState(0);

  const increaseHandler = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  return { counter, increaseHandler };
};
