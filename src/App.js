// @import "~bootstrap/scss/bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Products from "./components/Products";
import FixedNavbar from "./components/Nav";
import Cart from "./components/Cart";

function App(props) {
  return (
    <div className="App">
      <FixedNavbar />
      <Products />
      <Cart />
    </div>
  );
}

export default App;
