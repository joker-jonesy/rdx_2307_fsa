import {useSelector} from "react-redux";
import CartItem from "./CartItem.jsx";

function Cart(){

    const cart = useSelector(state=>state.cart);
    return(
        <>
            <h1>Cart{cart.length!==0&&"("+cart.length+")"}</h1>
            {cart.map((i,idx)=>
                <CartItem key={idx} id={idx} dt={i}/>
            )}
        </>
    )
}

export default Cart;