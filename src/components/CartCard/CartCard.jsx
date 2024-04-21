import { useContext } from "react";
import styles from "./CartCard.module.scss";
import placeholder from "../../assets/PLACEHOLDER.webp";
import { CartContext } from "../../context/CartContextProvider/CartContextProvider";

const CartCard = ({ sneaker, removeSneakers }) => {
  const { subtractFromTotal, total } = useContext(CartContext);
  const handleClick = (e) => {
    e.preventDefault();
    removeSneakers(sneaker, sneaker.selectedSize);
    subtractFromTotal(sneaker.estimatedMarketValue);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={sneaker.image ? sneaker.image : placeholder}
          alt="sneaker image"
        />
      </div>
      <div className={styles.desc}>
        <p className={styles.title}>{sneaker.name}</p>
        <p className={styles.text}>{sneaker.brand}</p>
        <p className={styles.link}>US {sneaker.selectedSize}</p>
        <p className={styles.text}>${sneaker.estimatedMarketValue}</p>
        <p onClick={handleClick} className={styles.button}>
          x Remove x
        </p>
      </div>
    </div>
  );
};

export default CartCard;
