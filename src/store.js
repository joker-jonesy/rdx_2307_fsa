import {configureStore} from "@reduxjs/toolkit";
import productReducer from './reducers/products.js'
import cartReducer from './reducers/cart.js';
import denomReducer from './reducers/denom.js'

const store = configureStore({
    reducer:{
        products:productReducer,
        cart: cartReducer,
        denom: denomReducer
    }
})

export default store;