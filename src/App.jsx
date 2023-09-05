import Content from "./components/Content.jsx";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";

import {useDispatch} from "react-redux";
import {changeDenom} from "./reducers/denom.js";

function App() {

  const dispatch = useDispatch();

  return (
    <>

      <button onClick={()=>dispatch(changeDenom("us"))}>US</button>
      <button onClick={()=>dispatch(changeDenom("ca"))}>CANADIAN</button>

      <Content>
        <ProductList/>
      </Content>
      <Content>
        <Cart/>
      </Content>
    </>
  )
}

export default App
