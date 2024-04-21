import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider/CartContextProvider";
import { useContext, useState } from "react";
import { brands } from "../../data/brands";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  const navigate = useNavigate();
  const { cartCount } = useContext(CartContext);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleClick = () => {
    setShowSubMenu(!showSubMenu);
  };

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const clickLink = (brand) => {
    setShowSubMenu(false);
    navigate(`/brand/${brand}`);
  };

  return (
    <div className={styles.main}>
      <nav className={styles.container}>
        <div className={styles.list}>
          <NavLink to="/latest" className={styles.link}>
            Latest
          </NavLink>
          <p className={styles.link} onClick={handleClick}>
            Brands
          </p>
        </div>
        <NavLink to="/" className={styles.title}>
          SOLESCAPE
        </NavLink>
        <div className={styles.list}>
          <p className={styles.link} onClick={handleSearchClick}>
            Search
          </p>
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
      {showSearch && (
        <SearchBar
          handleSearchClick={handleSearchClick}
          setShowSearch={setShowSearch}
        />
      )}
    </div>
  );
};

export default NavBar;
