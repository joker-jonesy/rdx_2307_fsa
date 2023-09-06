import {useSelector} from "react-redux";
import Product from "./Product.jsx";

function ProductList(){

    const products = useSelector(state=>state.products);

    return(
        <>
            <h1>Products</h1>
            {products.map((i,idx)=>
                <Product key={idx} dt={i}/>
            )}

        </>
    )
}

export default ProductList;