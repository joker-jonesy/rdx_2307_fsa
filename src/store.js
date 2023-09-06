import {configureStore} from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import productReducer from './reducers/products.js'
import cartReducer from './reducers/cart.js';
import denomReducer from './reducers/denom.js';
import {pokemonApi} from "./reducers/pokemon.js";

const store = configureStore({
    reducer:{
        products:productReducer,
        cart: cartReducer,
        denom: denomReducer,
        // [pokemonApi.reducerPath]: pokemonApi.reducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware)
})

setupListeners(store.dispatch)

export default store;