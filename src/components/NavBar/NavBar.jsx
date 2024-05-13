import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider/CartContextProvider";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { getBrandNames } from "../../services/sneaker-services";
import cart from "../../assets/cart.png";
import search from "../../assets/search.png";
import menu from "../../assets/menu.png";

const NavBar = () => {
  const navigate = useNavigate();
  const { cartCount } = useContext(CartContext);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [brands, setBrands] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    getBrandNames()
      .then((data) => {
        setBrands(data);
      })
      .catch((error) => {
        console.warn(error.message);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    setShowSubMenu(!showSubMenu);
  };

  const handleMenuClick = () => {
    if (showMobileMenu) {
      setIsTransitioning(true);
      setTimeout(() => {
        setShowMobileMenu(false);
        setIsTransitioning(false);
      }, 800);
    } else {
      setShowMobileMenu(true);
    }
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
        {isMobileView ? (
          <div className={styles.list}>
            <img
              onClick={handleMenuClick}
              className={styles.image_menu}
              src={menu}
              alt="menu"
            ></img>
          </div>
        ) : (
          <div className={styles.list}>
            <NavLink to="/latest" className={styles.link}>
              Latest
            </NavLink>
            <p className={styles.link} onClick={handleClick}>
              Brands
            </p>
          </div>
        )}
        <NavLink to="/" className={styles.title}>
          SOLESCAPE
        </NavLink>
        {isMobileView ? (
          <div className={styles.list}>
            <img
              onClick={handleSearchClick}
              className={styles.image}
              src={search}
              alt="search"
            ></img>
            <NavLink to="/cart" className={styles.link}>
              <img className={styles.image} src={cart} alt="cart"></img>
            </NavLink>
          </div>
        ) : (
          <div className={styles.list}>
            <p className={styles.link} onClick={handleSearchClick}>
              Search
            </p>
            <NavLink to="/cart" className={styles.link}>
              Cart({cartCount})
            </NavLink>
          </div>
        )}
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

      {showMobileMenu && (
        <div
          className={`${styles.menu} ${showMobileMenu ? "" : styles.hide} ${
            isTransitioning ? styles.hide : ""
          }`}
        >
          <div className={styles.menu_box}>
            <p onClick={handleMenuClick} className={styles.menu_close}>
              &#10005;
            </p>
          </div>
          <div className={styles.menu_box}>
            <NavLink to="/latest" className={styles.link}>
              Latest
            </NavLink>
          </div>
          <div className={styles.menu_box}>
            <p className={styles.link} onClick={handleClick}>
              Brands
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
