import {createStore} from "redux";
import productsReducer from "./reducers/products_reducer";
import thunk from "redux-thunk";
import {applyMiddleware} from "redux";

const store = createStore(productsReducer, applyMiddleware(thunk));

export {store};
