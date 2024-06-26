import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider/CartContextProvider";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Message from "../Message/Message";
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
  const [fetchStatus, setFetchStatus] = useState("");

  useEffect(() => {
    setFetchStatus("LOADING");
    getBrandNames()
      .then((data) => {
        setFetchStatus("SUCCESS");
        setBrands(data);
      })
      .catch((error) => {
        setFetchStatus("FAILED");
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
        setShowSubMenu(false);
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
    setShowMobileMenu(false);
    navigate(`/brand/${brand}`);
  };

  const hideMenu = () => {
    setShowSubMenu(false);
    setShowMobileMenu(false);
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
            <NavLink onClick={hideMenu} to="/latest" className={styles.link}>
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
        <nav
          className={`${styles.submenu} ${
            showMobileMenu ? styles.submenu_mobile : ""
          } ${showSubMenu ? "" : styles.hide} ${
            isTransitioning ? styles.hide : ""
          }`}
        >
          {fetchStatus === "FAILED" && (
            <div>
              <p>Failed to Load Brands</p>
            </div>
          )}
          {fetchStatus === "SUCCESS" &&
            brands.map((brand) => (
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
            <NavLink onClick={hideMenu} to="/latest" className={styles.link}>
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
