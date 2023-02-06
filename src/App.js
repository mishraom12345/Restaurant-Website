import Cart from "./Componet/Cart/Cart";
import Header from "./Componet/Layout/Header";
import Meal from "./Componet/Meal/Meal";

function App() {
  return (
    <div>
      <Cart />
      <Header />
      <main>
        <Meal />
      </main>
    </div>
  );
}

export default App;
