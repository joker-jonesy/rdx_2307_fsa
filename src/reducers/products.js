import {createSlice} from "@reduxjs/toolkit";
import data from "../data/data.js";

const initialState = data;

const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        addProduct:(state, action)=>{
            state.push(action.payload)
        }
    }
})

export const {addProduct}=productsSlice.actions;

export default productsSlice.reducer