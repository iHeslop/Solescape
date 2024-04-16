import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

const NavBar = ({ cartCount = 0 }) => {
  return (
    <nav className={styles.container}>
      <div className={styles.list}>
        <NavLink to="/" className={styles.title}>
          SOLESCAPE
        </NavLink>
        <NavLink className={styles.link}>Latest</NavLink>
        <NavLink className={styles.link}>Sneakers</NavLink>
        <NavLink className={styles.link}>Brands</NavLink>
        <NavLink className={styles.link}>Sale</NavLink>
      </div>
      <div className={styles.list}>
        <NavLink className={styles.link}>Search</NavLink>
        <NavLink to="/cart" className={styles.link}>
          Cart({cartCount})
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
