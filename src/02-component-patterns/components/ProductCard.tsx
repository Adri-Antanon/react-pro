import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export const ProductCard = () => {
  const { counter, increaseHandler } = useProduct();

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
