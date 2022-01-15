import { useState } from "react";

export const useProduct = () => {
  const [counter, setCounter] = useState(0);

  const increaseHandler = (value: number) => {
    setCounter((prevCounter) => Math.max(prevCounter + value, 0));
  };

  return { counter, increaseHandler };
};
