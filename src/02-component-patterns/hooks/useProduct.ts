import { useEffect, useRef, useState } from "react";
import { useProductArgs } from "../interfaces/index";

export const useProduct = ({
  product,
  onChange,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  // const isControlled = useRef(!!onChange);

  const increaseHandler = (value: number) => {
    // if (isControlled.current) {
    //   return onChange!({ count: value, product });
    // Siempre que ponemos el ! al final de una variable es para decirle a TS que seguro que existirá cuando lo necesite
    // }
    let newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    isMounted.current = true;
  }, []);

  useEffect(() => {
    if (!isMounted.current) return;

    setCounter(value);
  }, [value]);

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    increaseHandler,
    reset,
  };
};
