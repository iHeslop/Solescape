import { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [sneakers, updateSneakers] = useState([]);
  const [total, setTotal] = useState(0);

  const addSneakers = (sneaker, size) => {
    let newCart = cartCount;
    setCartCount(newCart + 1);
    updateSneakers([...sneakers, { ...sneaker, selectedSize: size }]);
  };

  const removeSneakers = (sneaker) => {
    let newCart = cartCount;
    setCartCount(newCart - 1);
    updateSneakers(sneakers.filter((a) => a.id !== sneaker.id));
  };

  const addToTotal = (price) => {
    let subTotal = total;
    setTotal(subTotal + price);
  };

  const subtractFromTotal = (price) => {
    let subTotal = total;
    setTotal(subTotal - price);
  };

  const providedValues = {
    cartCount,
    sneakers,
    addSneakers,
    removeSneakers,
    total,
    addToTotal,
    subtractFromTotal,
  };
  return (
    <CartContext.Provider value={providedValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
