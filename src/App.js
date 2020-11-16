// @import "~bootstrap/scss/bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Products from "./components/Products";
import FixedNavbar from "./components/Nav";
import Footer from "./components/Footer"
import Cart from "./components/Cart";

function App(props) {
  return (
    <div className="App">
      <FixedNavbar />
      <Products />
      <Footer />
      <Cart />
    </div>
  );
}

export default App;
