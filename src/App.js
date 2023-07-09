import Cart from "./Components/cart/cart";
import ShoeForm from "./Components/Form/ShoeForm";
import Header from "./Components/Header/Header";
import Shoes from "./Components/Shoes/Shoes";
import CartProvider from "./Components/store/CartProvider";
import ShoeProvider from "./Components/store/ShoeProvider";
import "./App.css";
function App() {
  return (
    <CartProvider>
    <ShoeProvider>
      <Header />
      <ShoeForm />
      <Shoes />
      <Cart/>
    </ShoeProvider>
    </CartProvider>
  );
}

export default App;