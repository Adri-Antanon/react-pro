import { useCallback, useContext } from "react";

import styles from "../../styles/styles.module.css";
import ProductContext from "../../context/product-context";
import { ProductButtonsStyles } from "../../interfaces";

export const ProductButtons: React.FC<ProductButtonsStyles> = ({
  className,
}) => {
  const { increaseHandler, counter, maxCount } = useContext(ProductContext);

  const { buttonsContainer, buttonMinus, countLabel, buttonAdd, disabled } =
    styles;

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

  console.log(isMaxReached());

  return (
    <div className={`${buttonsContainer} ${className} `}>
      <button onClick={() => increaseHandler(-1)} className={buttonMinus}>
        -
      </button>
      <div className={countLabel}>{counter}</div>
      <button
        onClick={() => increaseHandler(1)}
        disabled={isMaxReached()}
        className={`${buttonAdd} ${isMaxReached() && disabled}`}
      >
        +
      </button>
    </div>
  );
};
