import { NavLink } from "react-router-dom";
import styles from "./Feature.module.scss";
import jordan from "../../assets/jordan-feature.jpg";
import nike from "../../assets/nike-feature.png";

const Feature = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_box}>
        <div className={styles.grid}>
          <p className={styles.title}>LATEST</p>
          <div className={styles.grid_box}>
            <h2 className={styles.grid_box_title}>JORDAN</h2>
            <NavLink to="/brand/Jordan" className={styles.link}>
              Shop Now
            </NavLink>
          </div>
        </div>
        <div className={styles.grid_imageBox}>
          <img className={styles.image} src={jordan} alt="jordan-feature"></img>
        </div>
      </div>
      <div className={styles.container_box2}>
        <div className={styles.grid}>
          <p className={styles.title}>LATEST</p>
          <div className={styles.grid_box}>
            <h2 className={styles.grid_box_title}>NIKE</h2>
            <NavLink to="/brand/Nike" className={styles.link}>
              Shop Now
            </NavLink>
          </div>
        </div>
        <div className={styles.grid_imageBox}>
          <img className={styles.image} src={nike} alt="jordan-feature"></img>
        </div>
      </div>
    </div>
  );
};

export default Feature;
