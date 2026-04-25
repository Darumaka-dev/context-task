import { createContext, useContext, useState } from "react";
import { PRODUCTS } from "../consts/products";
const CartContext = createContext(null);

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const { children } = props;

  const addProduct = (id) => {
    const newProduct = PRODUCTS.find((product) => product.id == id);
    const isProductExists = cart.some((product) => product.id == id);

    if (!isProductExists) {
      setCart((prev) => [...prev, newProduct]);
      return;
    }

    const updatedCart = cart.map((product) =>
      product.id == id ? { ...product, count: product.count + 1 } : product
    );

    setCart(updatedCart);
  };

  const removeProduct = (id) => {
    const existProduct = cart.find((product) => product.id == id);

    if (existProduct.count == 1) {
      setCart(cart.filter((product) => product.id !== id));
      return;
    }

    const updatedCart = cart.map((product) =>
      product.id == id ? { ...product, count: product.count - 1 } : product
    );

    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("CartContext is not available for this component");
  }
  return context;
};
