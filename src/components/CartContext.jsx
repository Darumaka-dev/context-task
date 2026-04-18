import { createContext,useContext,useState } from 'react'

const CartContext = createContext(null);


export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const PRODUCTS = [{id:1, title:'mobile-1', count:1}, {id:2, title:'mobile-2', count:1}, {id:3, title:'mobile-3', count:1}]
  const {children} = props;


  const addProduct = (id) => {
    const newProduct = PRODUCTS.find((product) => product.id == id);
  
    const updateCart = (prev) => {
      const existProduct = prev.some(product => product.id == id);

      return existProduct
              ? prev.map(product => product.id == id ? { ...product, count: product.count + 1 } : product)
              : [...prev, { ...newProduct }];
    };
  
    setCart(updateCart);
  };

  const removeProduct = (id) => {

    const updateCart = (prev) => {
      const existProduct = cart.find((product) => product.id == id);

      return existProduct.count > 1
      ? prev.map(product => product.id == id ? { ...product, count: product.count - 1 } : product)
      : cart.filter((product) => product.id !== id)
    };
    
    setCart(updateCart);
  };


  return (
    <CartContext.Provider value={{cart, addProduct, removeProduct, PRODUCTS}}>
      {children}
      </CartContext.Provider>
  )
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("CartContext is not available for this component");
  }
  return context;
};