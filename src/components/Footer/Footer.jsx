import styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <h1 className={styles.carousel_title}>SOLESCAPE</h1>
        <h1 className={styles.carousel_title}>SOLESCAPE</h1>
        <h1 className={styles.carousel_title}>SOLESCAPE</h1>
        <h1 className={styles.carousel_title}>SOLESCAPE</h1>
        <h1 className={styles.carousel_title}>SOLESCAPE</h1>
        <h1 className={styles.carousel_title}>SOLESCAPE</h1>
      </div>
      <nav className={styles.footer}>
        <NavLink className={styles.link}>Privacy Policy</NavLink>
        <NavLink className={styles.link}>Terms and Conditions</NavLink>
        <NavLink className={styles.link}>Contact</NavLink>
      </nav>
      <div className={styles.footer}>
        <p className={styles.footer_text}>
          &copy; Solescape {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
