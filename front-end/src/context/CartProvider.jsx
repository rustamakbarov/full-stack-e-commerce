import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  );

  useEffect(
    function () {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    },
    [cartItems],
  );

  function addToCart(cartItem) {
    setCartItems([...cartItems, cartItem]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
