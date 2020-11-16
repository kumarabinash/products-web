/**
 * Cart displayed in a modal
 * @author Kumar Abinash
 * @param {object} props:
 *  {array} data: list of products
 *  {fn} addToCart: for adding item to cart
 *  {fn} closeCart: hides cart
 *  {fn} removeFromCart: removes an item from cart
 */

import React from "react";

// Bootstrap
import Modal from "react-bootstrap/cjs/Modal";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/cjs/Button";

// Utilities (Redux)
import {connect} from "react-redux";

// Actions
import {ADD_TO_CART, HIDE_CART, REMOVE_FROM_CART} from "../store/actions/product_actions";

// Assets (Images, Icons)
import EmptyCartImage from "./empty_cart.png";
import {FaMinusCircle, FaPlusCircle, FaCreditCard} from "react-icons/fa"


function Cart({data, closeCart, removeFromCart, addToCart}){
  const cart_items = data.items.map((item, index) => {
    return(
      <tr key={item.id}>
        <td>{index + 1}</td>
        <td><img src={item.image_url} height={40} width={40} /></td>
        <td>{item.name}</td>
        <td>{item.quantity}</td>
        <td className="price">₹{item.quantity * parseFloat(item.price)}</td>
        <td className="item-actions">
          <FaMinusCircle color="red" onClick={() => {removeFromCart({type: REMOVE_FROM_CART, payload: item.id})}}/>
          &nbsp;
          <FaPlusCircle color="green" onClick={() => {addToCart({type: ADD_TO_CART, payload: item.id})}}/>
        </td>
      </tr>
    )
  });

  const cart_summary = (
    <tr className="table-summary">
      <td colSpan={3}></td>
      <td>
        {data.items.reduce((acc, item) => {
          return acc += item.quantity;
        }, 0)}
      </td>
      <td className="price">
        ₹{data.items.reduce((acc, item) => {
        return acc += (item.quantity * item.price);
      }, 0)}
      </td>
      <td className="item-actions"></td>
    </tr>
  );

  return(
    <Modal show={data.show} onHide={closeCart} backdrop={true} keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="cart-container">
          <div className="cart-items">
            {data.items.length ?
              <>
                <Table hover>
                  <tbody>
                  {cart_items}
                  {cart_summary}
                  </tbody>
                </Table>
                <div className="cart-actions">
                  <Button variant="outline-info" size="sm">
                    <FaCreditCard/> Checkout
                  </Button>
                </div>
              </>
              :
              <div className="cart-empty">
                <img src={EmptyCartImage} alt="" height="100%" width="100%"/>
                <h4 style={{textAlign: 'center', marginTop: "20px"}}>Your cart is empty!</h4>
              </div>
            }
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
const mapStoreToProps = store => {
  return {
    data: store.cart
  }
};

const mapDispatchToProps = dispatch => {
  return {
    closeCart: () => {dispatch({type: HIDE_CART})},
    removeFromCart: (action) => {dispatch(action)},
    addToCart: (action) => {dispatch(action)}
  }
};

export default connect(mapStoreToProps, mapDispatchToProps)(Cart);


