import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider/CartContextProvider";
import { useContext } from "react";

const NavBar = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <nav className={styles.container}>
      <div className={styles.list}>
        <NavLink to="/" className={styles.title}>
          SOLESCAPE
        </NavLink>
        <NavLink className={styles.link}>Latest</NavLink>
        <NavLink className={styles.link}>Sneakers</NavLink>
        <NavLink className={styles.link}>Brands</NavLink>
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
