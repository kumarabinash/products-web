import React, {useEffect} from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {FaCartPlus} from "react-icons/fa";
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