import Product from "./Product";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {FETCH_PRODUCTS} from "../../store/actions/product_actions";
import Axios from "axios";
import Row from "react-bootstrap/Row"

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