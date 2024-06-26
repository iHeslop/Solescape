import styles from "./ProductPage.module.scss";
import placeholder from "../../assets/PLACEHOLDER.webp";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContextProvider/CartContextProvider";
import { useNavigate } from "react-router-dom";

const ProductPage = ({ sneaker }) => {
  const { addSneakers } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState("");
  const [displaySize, setDisplaySize] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [sizes, setSizes] = useState([]);
  const cartMessage = document.getElementById("cartMessage");
  const navigate = useNavigate();

  useEffect(() => {
    let newSizes = Object.entries(sneaker.sizes)
      .filter(([size, quantity]) => quantity > 0)
      .sort((a, b) => parseFloat(a[0]) - parseFloat(b[0]));
    setSizes(newSizes);
    if (newSizes.length > 0) {
      setSelectedSize(newSizes[0][0]);
      setDisplaySize(newSizes[0][0]);
    }
  }, []);

  const submitForm = (event) => {
    event.preventDefault();
    addSneakers(sneaker, selectedSize);
    setDisplaySize(selectedSize);
    setSizes((prevSizes) => {
      const updatedSizes = prevSizes
        .map(([size, quantity]) => {
          if (size === selectedSize) {
            return [size, quantity - 1];
          }
          return [size, quantity];
        })
        .filter(([size, quantity]) => quantity > 0);
      if (
        !updatedSizes.find(([size]) => size === selectedSize) &&
        updatedSizes.length > 0
      ) {
        setSelectedSize(updatedSizes[0][0]);
      }
      return updatedSizes;
    });

    cartMessage.style.display = "flex";
    setTimeout(() => {
      cartMessage.style.opacity = 1;
    }, 300);
    setTimeout(() => {
      cartMessage.style.opacity = 0;
      setTimeout(() => {
        cartMessage.style.display = "none";
      }, 300);
    }, 5000);
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/cart");
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_box}>
          <div className={styles.grid_imageBox}>
            <div className={styles.title_box}>
              <p className={styles.title}>{sneaker.name}</p>
            </div>
            <img
              className={styles.image}
              src={sneaker.image ? sneaker.image : placeholder}
              alt="sneaker image"
              onClick={toggleModal}
            />
          </div>
          <div className={styles.grid}>
            <div className={styles.title_box}>
              <p className={styles.title}>{sneaker.brand}</p>
            </div>
            <div className={styles.grid_box}>
              <h2 className={styles.grid_box_title}>{sneaker.name}</h2>
              <p className={styles.grid_box_desc}>
                ${sneaker.estimatedMarketValue}
              </p>
              <p className={styles.grid_box_colour}>{sneaker.colourway}</p>

              <form className={styles.form} onSubmit={submitForm}>
                {Object.values(sneaker.sizes).every((value) => value === 0) ||
                Object.values(sizes).every((value) => value === 0) ? (
                  <select className={styles.select} disabled>
                    <option>SOLD OUT</option>
                  </select>
                ) : (
                  <select
                    className={styles.select}
                    onChange={(event) => {
                      setSelectedSize(event.target.value);
                      setDisplaySize(event.target.value);
                    }}
                  >
                    {sizes.map(([size]) => (
                      <option
                        key={size}
                        className={styles.select_text}
                        value={size}
                      >
                        US {size}
                      </option>
                    ))}
                  </select>
                )}
                <button
                  className={styles.form_button}
                  type="submit"
                  disabled={
                    Object.values(sneaker.sizes).every(
                      (value) => value === 0
                    ) || Object.values(sizes).every((value) => value === 0)
                  }
                >
                  {Object.values(sneaker.sizes).every((value) => value === 0) ||
                  Object.values(sizes).every((value) => value === 0)
                    ? "SOLD OUT"
                    : `ADD TO CART | $${sneaker.estimatedMarketValue}`}
                </button>
              </form>

              <div className={styles.sizeMessage}>
                <p id="cartMessage" className={styles.sizeMessage_text}>
                  Size {displaySize} {sneaker.name} has been added to your cart
                  <span className={styles.button} onClick={handleClick}>
                    View Cart
                  </span>
                </p>
              </div>
              <p className={styles.grid_box_desc}>{sneaker.description}</p>
              <p className={styles.grid_box_desc}>{sneaker.releaseDate}</p>
              <a
                target="__blank"
                href={sneaker.link}
                className={styles.grid_box_link}
              >
                More Info...
              </a>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className={styles.modal}>
          <p onClick={toggleModal} className={styles.modal_close}>
            &#10005;
          </p>
          <input type="checkbox" id="zoomCheck" />
          <label htmlFor="zoomCheck">
            <img
              className={styles.modal_image}
              src={sneaker.image ? sneaker.image : placeholder}
              alt="sneaker image"
            />
          </label>
        </div>
      )}
    </>
  );
};

export default ProductPage;
