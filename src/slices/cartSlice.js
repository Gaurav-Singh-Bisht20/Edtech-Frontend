import { createSlice } from "@reduxjs/toolkit";
import  {toast} from "react-hot-toast"

const initialState = {
    totoalIrems : localStorage.getItem("totalItem")? JSON.parse(localStorage.getItem("totalItem")):null
}

const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        setTotalItems(state,value){
            state.token =value.payload
        }
        // add to cart
        // remove from cart
        // resetCart
    }
})

export const {setTotalItems} =cartSlice.actions;
export default cartSlice.reducer;