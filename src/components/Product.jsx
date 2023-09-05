import {useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../reducers/cart.js";

function Product(props){
   const denom = useSelector(state=>state.denom.value)
    const dispatch = useDispatch();

    return(
        <>
            <div className={"product"}>
                <h1>{props.dt.name}</h1>
                <h3>{props.dt.price[denom]}</h3>
                <button onClick={()=>dispatch(addToCart(props.dt))}>Add to Cart</button>
            </div>
        </>
    )
}

export default Product;