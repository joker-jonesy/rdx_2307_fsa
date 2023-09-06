import Cart from "../Cart.jsx";
import Content from "../Content.jsx";
import React from "react";
import {useGetPokemonByNameQuery, useGetPokemonQuery} from "../../reducers/pokemon.js";


function CartPage(){


    const pokemon=useGetPokemonByNameQuery('pikachu');
    const collection = useGetPokemonQuery();

    console.log(collection);

    return(
        <Content>
            <Cart/>
            {!pokemon.isLoading?<h1>{pokemon.data.name}</h1>:<h1>Loading...</h1>}
        </Content>
    )
}

export default CartPage