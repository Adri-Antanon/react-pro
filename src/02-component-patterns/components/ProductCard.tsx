import styles from "../styles/styles.module.css";

import noImage from "../assets/no-image.jpg";
import { useState } from "react";

export const ProductCard = () => {
  const [counter, setCounter] = useState(0);

  const increaseHandler = (value: number) => {
    setCounter((prevCounter) => Math.max(prevCounter + value, 0));
  };

  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src="./coffee-mug.png"
        alt="Coffe Mug"
      />
      {/* <img className={styles.productImg} src={noImage} alt="test" /> */}
      <div className={styles.buttonsContainer}>
        <button
          onClick={() => increaseHandler(-1)}
          className={styles.buttonMinus}
        >
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button onClick={() => increaseHandler(1)} className={styles.buttonAdd}>
          +
        </button>
      </div>
    </div>
  );
};
