import React from "react";
import Modal from "react-bootstrap/cjs/Modal";
import {connect} from "react-redux";
import {HIDE_CART} from "../store/actions/product_actions";

function Cart({data, closeCart}){

  console.log("Modal", data);

  return(
    <Modal show={data.show} onHide={closeCart} backdrop={true} keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="cart-container">
          <div className="cart-items">
            {data.items.map((item, index) => {
              return(
                <div className="cart-item">
                  <div className="item-thumb">
                    <img src={item.image_url} alt="" height={50} width={50}/>
                  </div>
                  <div className="item-name">{item.name}</div>
                  <div className="item-quantity">{item.quantity}</div>
                  <div className="item-price">{item.quantity * parseFloat(item.price)}</div>
                </div>
              )
            })}
          </div>

          <div className="cart-summary">
            <div className="total-items-count">
              {data.items.reduce((acc, item) => {
                return acc += item.quantity;
              }, 0)}
            </div>

            <div className="total-price">
              {data.items.reduce((acc, item) => {
                return acc += (item.quantity * item.price);
              }, 0)}
            </div>

          </div>
        </div>

        <Modal.Footer>
          <button>Checkout</button>
        </Modal.Footer>
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
    closeCart: () => {dispatch({type: HIDE_CART})}
  }
};

export default connect(mapStoreToProps, mapDispatchToProps)(Cart);
