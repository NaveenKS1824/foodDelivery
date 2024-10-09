import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

const store = configureStore({
    reducer:{
        cartItem:cartSlice,
        food:productSlice,
    }
})

export default store;