import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import {FaCartArrowDown} from 'react-icons/fa';
import {FcLike} from "react-icons/fc";

import Cart from "./Cart"
import {SHOW_CART} from "../store/actions/product_actions";
import {connect} from "react-redux";

function FixedNavbar({data, showCart}){
  return(
    <Container fluid>
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="https://drive.google.com/file/d/18QTUqaAA0Tnl8f8NN8vpKi1SvY4oGQ5u/view?usp=sharing" target="_blank" rel="noreferrer">
          {/*<FcLike style={{fontSize: "28px"}}/>*/}
          <span className="heart"></span>
        </Navbar.Brand>
        <Nav className="mr-auto justify-content-end" style={{marginLeft: '25px'}}>
          <Nav.Link href="#">Products</Nav.Link>
        </Nav>
        <Nav className="mr-right">
          <Nav.Link href="#" onClick={(e) => {e.preventDefault(); showCart(); }}>
            <FaCartArrowDown style={data.items.length ?
              {color: '#ec9b1e', fontSize: "28px"} :
              {color: 'grey', fontSize: "22px"}}
            />
            <span className="cart-count" style={{display: data.items.length ? 'inline' : 'none'}}>{data.items.length ? data.items.length : null}</span>
          </Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  )
}
const mapStoreToProps = store => {
  return {
    data: store.cart
  }
};

const mapDispatchToProps = dispatch => {
  return {
    showCart: () => {dispatch({type: SHOW_CART})}
  }
};

export default connect(mapStoreToProps, mapDispatchToProps)(FixedNavbar);
