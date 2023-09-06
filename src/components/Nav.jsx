import {Link} from "react-router-dom";

function Nav(){
    return(
        <nav>
            <Link to={"/"}>Product Page</Link>
            <Link to={"/cart"}>Cart Page</Link>
        </nav>
    )
}

export default Nav;