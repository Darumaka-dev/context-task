import { CartContextProvider } from './components/CartContext';
import { Header } from './components/Header';
import { Cart } from './components/Cart';
import { ProductList } from './components/ProductList';


function App() {

  return (
    <CartContextProvider>
      <Header/>
      <ProductList/>
      <Cart/>
    </CartContextProvider>
  )
}

export default App
