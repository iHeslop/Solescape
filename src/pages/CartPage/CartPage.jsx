import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContextProvider/CartContextProvider";
import CartCard from "../../components/CartCard/CartCard";
import styles from "./CartPage.module.scss";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const { sneakers, removeSneakers, total, setTotal } = useContext(CartContext);
  const [totalCalculated, setTotalCalculated] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };
  useEffect(() => {
    setTotalCalculated(false);
    let subTotal = 0;
    sneakers.forEach((sneaker) => {
      subTotal += sneaker.estimatedMarketValue * sneaker.quantity;
    });
    setTotal(subTotal);
    setTotalCalculated(true);
  }, [sneakers]);

  return (
    <div className={styles.main}>
      {sneakers.length === 0 && (
        <div className={styles.container}>
          <h2 className={styles.title}>Cart is empty.</h2>
          <div className={styles.button}>
            <p className={styles.button_text} onClick={handleClick}>
              Find Sneakers...
            </p>
          </div>
        </div>
      )}
      {sneakers.length > 0 && (
        <div className={styles.list}>
          <div className={styles.cart}>
            <h2 className={styles.cart_title}>Your Cart</h2>
          </div>
          {sneakers.map((sneaker) => (
            <CartCard
              key={sneaker.itemId}
              sneaker={sneaker}
              removeSneakers={removeSneakers}
            />
          ))}
          {totalCalculated && (
            <div className={styles.total}>
              <h2 className={styles.total_title}>Sub-Total: ${total}</h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default CartPage;
