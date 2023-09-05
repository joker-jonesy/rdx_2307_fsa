import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value:"us"
};

const denomSlice = createSlice({
    name:"denom",
    initialState,
    reducers:{
        changeDenom:(state, action)=>{
            state.value=action.payload
        }
    }
})

export const {changeDenom} = denomSlice.actions

export default denomSlice.reducer;