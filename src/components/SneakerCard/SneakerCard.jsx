import { useState, useEffect } from "react";
import styles from "./SneakerCard.module.scss";
import placeholder from "../../assets/PLACEHOLDER.webp";
import { useNavigate } from "react-router-dom";

const SneakerCard = ({ sneaker, onClickSneaker }) => {
  const [isVisible, setIsVisible] = useState(null);

  const handleClick = () => {
    setIsVisible(false);
    onClickSneaker(sneaker.id);
  };

  const navigate = useNavigate();
  const clickLink = () => {
    navigate(`/brand/${sneaker.brand}`);
  };

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setIsVisible(true);
    }, Math.floor(Math.random() * 1000));

    const timeout2 = setTimeout(() => {
      setIsVisible(false);
    }, Math.floor(Math.random() * 1000 + 8000));

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          className={`${styles.image} ${
            isVisible ? styles.visible : styles.hidden
          }`}
          src={sneaker.image ? sneaker.image : placeholder}
          alt="sneaker image"
        />
      </div>
      <div className={styles.desc}>
        <p
          onClick={clickLink}
          className={`${styles.link} ${
            isVisible ? styles.visible : styles.hidden
          }`}
        >
          {sneaker.brand}
        </p>
        <p
          onClick={handleClick}
          className={`${styles.link} ${
            isVisible ? styles.visible : styles.hidden
          }`}
        >
          {sneaker.name}
        </p>
        <p
          className={`${styles.text} ${
            isVisible ? styles.visible : styles.hidden
          }`}
        >
          ${sneaker.estimatedMarketValue}
        </p>
      </div>
    </div>
  );
};

export default SneakerCard;
