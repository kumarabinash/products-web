/**
 * Products Index, renders a list of products
 * @author Kumar Abinash
 * @param {object} props:
 *  {array} data: list of products
 *  {fn} fetchProducts: redux dispatch action for adding fetched data from remote
 *  {fn} addToCart: addToCart
 */

import React, {useEffect, useState} from "react";

// Boostrap
import Row from "react-bootstrap/Row"

// Components
import Product from "./Product";

// Utilities (Redux, Axios)
import {connect} from "react-redux";
import Axios from "axios";

// Actions
import {FETCH_PRODUCTS} from "../../store/actions/product_actions";

function Products({data, fetchProducts, addToCart}){

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  // Component did amount
  useEffect(() => {
    Axios.get(`https://5faa6489b5c645001602a7ac.mockapi.io/api/v1/products?page=${page}&limit=${limit}`).then((response) => {
      fetchProducts({
        type: FETCH_PRODUCTS,
        payload: response
      })
    });
  }, []);

  return(
    <div className="products-index">
      <Row>
        {data.map(product => <Product key={product.id} data={product} addToCart={addToCart} />)}
      </Row>
    </div>
  )
}
const mapStoreToProps = store => {
  return {
    data: store.products
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: (action) => {dispatch(action)},
    addToCart: (action) => {dispatch(action)}
  }
};

export default connect(mapStoreToProps, mapDispatchToProps)(Products);