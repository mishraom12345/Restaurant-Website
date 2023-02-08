import { useState } from "react";
import Cart from "./Componet/Cart/Cart";
import Header from "./Componet/Layout/Header";
import Meal from "./Componet/Meal/Meal";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown,setcartIsShown]= useState(false)
  
  const showcartHandler = ()=>{
    setcartIsShown(true)
  }
  const hideCartHandler=()=>{
    setcartIsShown(false)
  }


  return (
    <CartProvider>
      {cartIsShown && <Cart onClose = {hideCartHandler} />}
      <Header onshowcart = {showcartHandler} />
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;
