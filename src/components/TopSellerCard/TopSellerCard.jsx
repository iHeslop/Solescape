import { NavLink } from "react-router-dom";
import styles from "./TopSellerCard.module.scss";
import placeholder from "../../assets/PLACEHOLDER.webp";
import { useNavigate } from "react-router-dom";

const TopSellerCard = ({ sneaker }) => {
  const navigate = useNavigate();
  const onClickSneaker = () => {
    navigate(`/product/${sneaker.id}`);
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
        <p className={styles.link} onClick={onClickSneaker}>
          {sneaker.brand}
        </p>
        <p className={styles.link_title} onClick={onClickSneaker}>
          {sneaker.name}
        </p>
        <p className={styles.text}>{sneaker.colourway}</p>
        <p className={styles.text}>Release Date: {sneaker.releaseDate}</p>
        <p className={styles.text}>Retail Price: ${sneaker.retailPrice}</p>
        <p className={styles.text}>
          Market Value: ${sneaker.estimatedMarketValue}
        </p>
        <div className={styles.sizes}>
          {sneaker.sizes.map((size) => (
            <p key={size} className={styles.text}>
              {size}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSellerCard;
