import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

function ProductHome(){

    const params = useParams();

    const products = useSelector(state=>state.products);

    const product = products.find((itm)=> itm.name === params.name)

    return(
        <>
            <h1>{product.name} Home</h1>
        </>
    )
}

export default ProductHome;