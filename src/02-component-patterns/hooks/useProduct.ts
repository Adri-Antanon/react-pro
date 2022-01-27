import { useEffect, useRef, useState } from "react";
import { useProductArgs } from "../interfaces/index";

export const useProduct = ({
  product,
  onChange,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange);
  console.log("isControlled", isControlled.current);

  const increaseHandler = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product });
      // Siempre que ponemos el ! al final de una variable es para decirle a TS que seguro que existirá cuando lo necesite
    }
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return { counter, increaseHandler };
};
