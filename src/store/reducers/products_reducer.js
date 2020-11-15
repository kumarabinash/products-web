import {FETCH_PRODUCTS, ADD_TO_CART, HIDE_CART, SHOW_CART} from "../actions/product_actions";
import {produce} from "immer";

const initialState = {
  products: [{id: 1, name: "Product 1 Name"}],
  cart: {
    show: false,
    count: 0,
    total: 0,
    items: []
  }
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload.data.data
      };
    case ADD_TO_CART:
      // {type: ADD_TO_CART, payload: :product_id}
      return produce(state, (draft) => {
        // Find Item to add to cart
        let product = draft.products.filter(product => {return product.id == action.payload})[0];

        if(typeof product === 'undefined'){
          return state
        }
        // Find item in cart
        let cart_item = draft.cart.items.filter((cart_item) => {return cart_item.id == action.payload})[0];

        if(typeof cart_item !== "undefined"){
          // If Item already present in cart
          cart_item.quantity++;
          product.cart_count++;
          product.stock--;
        } else {
          // else add item with quantity
          product.stock--;
          product.cart_count = 1;
          draft.cart.items.push({...product, quantity: 1});
        }
      });

    case REMOVE_FROM_CART:
      return produce(state, draft => {
        let product = draft.products.filter(product => {return product.id == action.payload})[0];

        if(typeof product === 'undefined'){
          return state
        }
        // Find item in cart
        let cart_item = draft.cart.items.filter((cart_item) => {return cart_item.id == action.payload})[0];

        if(typeof cart_item !== 'undefined'){
          if(cart_item.quantity === 1){
            // Remove item from cart
            let cart_item_index;



          } else {
            // Reduce quantity from item

          }
        } else {

        }
      });
    case HIDE_CART:
      return produce(state, draft => {
        draft.cart.show = false;
      });

    case SHOW_CART:
      return produce(state, draft => {
        draft.cart.show = true;
      });

    default:
      return state
  }
}