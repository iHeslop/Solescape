import { createContext, useState } from "react";
import {
  removeSneakerSize,
  addSneakerSize,
} from "../../services/sneaker-services";

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [sneakers, updateSneakers] = useState([]);
  const [total, setTotal] = useState(0);

  const addSneakers = (sneaker, size) => {
    const itemId = `${sneaker.id}-${size}`;
    const existingSneakerIndex = sneakers.findIndex(
      (item) => item.itemId === itemId
    );
    if (existingSneakerIndex !== -1) {
      const updatedSneakers = [...sneakers];
      updatedSneakers[existingSneakerIndex].quantity += 1;
      updateSneakers(updatedSneakers);
    } else {
      const updatedSneaker = {
        ...sneaker,
        selectedSize: size,
        quantity: 1,
        itemId: itemId,
      };
      updateSneakers([...sneakers, updatedSneaker]);
    }
    setCartCount(cartCount + 1);
    removeSneakerSize(sneaker.id, size);
  };

  const removeSneakers = (sneaker, size) => {
    const itemId = `${sneaker.id}-${size}`;
    const existingSneakerIndex = sneakers.findIndex(
      (item) => item.itemId === itemId
    );
    const updatedSneakers = [...sneakers];
    if (updatedSneakers[existingSneakerIndex].quantity > 1) {
      updatedSneakers[existingSneakerIndex].quantity -= 1;
      updateSneakers(updatedSneakers);
    } else {
      updateSneakers(sneakers.filter((a) => a.itemId !== sneaker.itemId));
    }
    setCartCount(cartCount - 1);
    addSneakerSize(sneaker.id, size);
  };

  const providedValues = {
    cartCount,
    sneakers,
    addSneakers,
    removeSneakers,
    total,
    setTotal,
  };
  return (
    <CartContext.Provider value={providedValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
