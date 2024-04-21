import styles from "./StoreFeature.module.scss";
import wall from "../../assets/sneaker-wall.webp";

const StoreFeature = () => {
  return (
    <div className={styles.storeContainer}>
      <div className={styles.desc}>
        <p>Sydney</p>
        <h1 className={styles.title}>Flagship Store</h1>
      </div>
      <img className={styles.image} src={wall}></img>
    </div>
  );
};

export default StoreFeature;
