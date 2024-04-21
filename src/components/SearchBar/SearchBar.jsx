import styles from "./SearchBar.module.scss";
import { useState } from "react";
import { getSneakersBySearchTerm } from "../../services/sneaker-services";
import BrandCard from "../BrandCard/BrandCard";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ handleSearchClick, setShowSearch }) => {
  const navigate = useNavigate();
  const [sneakers, setSneakers] = useState();
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setFetchStatus("LOADING");
    const form = e.target;
    const searchValue = new FormData(form).get("search");
    setSearchTerm(searchValue);
    getSneakersBySearchTerm(searchValue)
      .then((data) => {
        setFetchStatus("SUCCESS");
        setSneakers(data);
      })
      .catch((error) => {
        setFetchStatus("FAILED");
        setError(error);
      });
    form.reset();
  };

  const onClickSneaker = (sneakerId) => {
    setShowSearch(false);
    navigate(`/product/${sneakerId}`);
  };

  const onLinkClick = () => {
    setShowSearch(false);
    navigate(`/search/${searchTerm}`);
  };

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modal_items}>
          <form className={styles.header} onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Search..."
              name="search"
              className={styles.search}
            />
            <div className={styles.button_container}>
              <button className={styles.button}>Search</button>
              <button
                onClick={handleSearchClick}
                className={styles.button_close}
              >
                &#10005;
              </button>
            </div>
          </form>
          {sneakers && (
            <div className={styles.container}>
              <div className={styles.header}>
                <p>{sneakers.length} results</p>
                <p onClick={onLinkClick} className={styles.link}>
                  View All
                </p>
              </div>
              <div className={styles.list}>
                {sneakers
                  .slice()
                  .sort((a, b) => {
                    return new Date(a.releaseDate) - new Date(b.releaseDate);
                  })
                  .slice(0, 4)
                  .map((sneaker) => (
                    <BrandCard
                      key={sneaker.id}
                      sneaker={sneaker}
                      onClickSneaker={onClickSneaker}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
