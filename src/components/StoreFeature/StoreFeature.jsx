import styles from "./StoreFeature.module.scss";
import wall from "../../assets/sneaker-wall.webp";
import vertical from "../../assets/Vertical-Store.webp";

const StoreFeature = () => {
  return (
    <div className={styles.storeContainer}>
      <div className={styles.desc}>
        <p className={styles.info}>SYDNEY</p>
        <h1 className={styles.title}>Flagship Store</h1>
      </div>
      <img className={styles.image} src={wall} alt="Store Image"></img>
      <img
        className={styles.verticalImage}
        src={vertical}
        alt="Vertical Store Image"
      ></img>
    </div>
  );
};

export default StoreFeature;
