import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import store from "./store.js";
import {Routes, BrowserRouter, Route} from "react-router-dom";
import ProductsPage from "./components/pages/ProductsPage.jsx";
import CartPage from "./components/pages/CartPage.jsx";
import Nav from "./components/Nav.jsx";
import ProductPage from "./components/pages/ProductPage.jsx";
import ProductDescription from "./components/pages/ProductDescription.jsx";
import ProductHome from "./components/pages/ProductHome.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Nav/>
                <Routes>
                    <Route path={"/"} element={<ProductsPage/>}/>
                    <Route path={"/cart"} element={<CartPage/>}/>
                    <Route path={"/product/:name"} element={<ProductPage/>}>
                        <Route path={"descr"} element={<ProductDescription/>}/>
                        <Route index element={<ProductHome/>}/>
                    </Route>
                </Routes>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
)
