/**
 * Product : Displays single product in a card
 * @author Kumar Abinash
 * @param {object} props:
 *  {object} data: product details
 *  {fn} addToCart: addToCart
 */

import React, {useEffect} from "react";

// Bootstrap
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// Icons
import {FaCartPlus} from "react-icons/fa";

// Actions
import {ADD_TO_CART} from "../../store/actions/product_actions";


export default function Product({ data, addToCart }){

  useEffect(() => {}, [data.cart_count]);

  return(
    <Col xs={12} sm={12} md={4} lg={3} className="product-container">
      <div className="product">
        <div className="product-preview">
          <img src={data.image_url} alt={data.name} />
        </div>

        <div className="product-details">
          <h3>{data.name}</h3>
          <div className="product-meta">
            <p className="product-price">
              ₹{data.price}
            </p>
            <div className="product-stock">
              {data.stock} left
            </div>
          </div>
          <div className="product-action">
            <Button variant={data.cart_count ? "info" : "outline-info"}
                    disabled={data.stock <= 0 ? true : null}
                    onClick={() => addToCart({
                      type: ADD_TO_CART,
                      payload: data.id
                    })}
                    block><FaCartPlus/>{data.cart_count ? ` ( ${data.cart_count} )` : null}</Button>
          </div>
        </div>
      </div>
    </Col>
  )
}