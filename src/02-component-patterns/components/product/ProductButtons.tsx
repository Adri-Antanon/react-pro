import { useContext } from "react";

import styles from "../../styles/styles.module.css";
import ProductContext from "../../context/product-context";
import { className } from '../../interfaces/index';

export const ProductButtons: React.FC<className> = ({className}) => {
  const { increaseHandler, counter } = useContext(ProductContext);
  const { buttonsContainer, buttonMinus, countLabel, buttonAdd } = styles;

  return (
    <div className={`${buttonsContainer} ${className}`}>
      <button onClick={() => increaseHandler(-1)} className={buttonMinus}>
        -
      </button>
      <div className={countLabel}>{counter}</div>
      <button onClick={() => increaseHandler(1)} className={buttonAdd}>
        +
      </button>
    </div>
  );
};
