import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider/CartContextProvider";
import { useContext, useState } from "react";
import { brands } from "../../data/brands";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const { cartCount } = useContext(CartContext);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleClick = () => {
    setShowSubMenu(!showSubMenu);
  };

  const clickLink = (brand) => {
    setShowSubMenu(false);
    navigate(`/brand/${brand}`);
  };

  return (
    <div className={styles.main}>
      <nav className={styles.container}>
        <div className={styles.list}>
          <NavLink to="/" className={styles.title}>
            SOLESCAPE
          </NavLink>
          <NavLink to="/latest" className={styles.link}>
            Latest
          </NavLink>
          <p className={styles.link} onClick={handleClick}>
            Brands
          </p>
        </div>
        <div className={styles.list}>
          <NavLink className={styles.link}>Search</NavLink>
          <NavLink to="/cart" className={styles.link}>
            Cart({cartCount})
          </NavLink>
        </div>
      </nav>
      {showSubMenu && (
        <nav className={styles.submenu}>
          {brands.map((brand) => (
            <p
              key={brand}
              onClick={() => clickLink(brand)}
              className={styles.link}
            >
              {brand}
            </p>
          ))}
        </nav>
      )}
    </div>
  );
};

export default NavBar;
