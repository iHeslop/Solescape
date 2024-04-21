import styles from "./BrandCard.module.scss";
import placeholder from "../../assets/PLACEHOLDER.webp";
import { useNavigate } from "react-router-dom";

const BrandCard = ({ sneaker, onClickSneaker }) => {
  const navigate = useNavigate();
  const clickLink = () => {
    navigate(`/brand/${sneaker.brand}`);
  };

  const handleClick = () => {
    onClickSneaker(sneaker.id);
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
        <p onClick={clickLink} className={styles.link}>
          {sneaker.brand}
        </p>
        <p onClick={handleClick} className={styles.link}>
          {sneaker.name}
        </p>
        <p className={styles.text}>${sneaker.estimatedMarketValue}</p>
      </div>
    </div>
  );
};

export default BrandCard;
