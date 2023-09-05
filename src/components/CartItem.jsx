import {useSelector,useDispatch} from "react-redux";
import {removeFromCart} from "../reducers/cart.js";

function CartItem(props){
    const denom = useSelector(state=>state.denom.value)

    const dispatch = useDispatch();
    return(
        <>
            <div className="cartItem">
                <h1>{props.dt.name}</h1>
                <h3>{props.dt.price[denom]}</h3>
                <button onClick={()=>dispatch(removeFromCart(props.id))}>Remove from Cart</button>
            </div>
        </>
    )
}

export default CartItem;