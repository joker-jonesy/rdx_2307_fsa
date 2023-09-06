import Content from "../Content.jsx";
import Product from "../Product.jsx";
import {useParams, Outlet, Link} from "react-router-dom";
import {useSelector} from "react-redux";

function ProductPage(){

    const params = useParams();

    const products = useSelector(state=>state.products);

    const product = products.find((itm)=> itm.name === params.name)

    console.log(data);

    return(
        <Content>
            <Product dt={product}/>
            <Link to={"/product/"+params.name}>HOME</Link>
            <Link to={"/product/"+params.name+"/descr"}>DESCRIPTION</Link>
            <Outlet/>
        </Content>
    )
}

export default ProductPage;