import { createSlice } from "@reduxjs/toolkit";

const initialState={
    carts:[]
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        setCart:(state, action)=>{
            state.carts.push(action.payload)
        },
        removeItem:(state, action)=>{
            state.carts = state.carts.filter((item)=>item.id!==action.payload)
        }
    }
});

export const {
    setCart
} = cartSlice.actions;

export default cartSlice.reducer;