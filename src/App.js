import { useState } from "react";
import Cart from "./Componet/Cart/Cart";
import Header from "./Componet/Layout/Header";
import Meal from "./Componet/Meal/Meal";

function App() {
  const [cartIsShown,setcartIsShown]= useState(false)
  
  const showcartHandler = ()=>{
    setcartIsShown(true)
  }
  const hideCartHandler=()=>{
    setcartIsShown(false)
  }


  return (
    <div>
      {cartIsShown && <Cart onClose = {hideCartHandler} />}
      <Header onshowcart = {showcartHandler} />
      <main>
        <Meal />
      </main>
    </div>
  );
}

export default App;
