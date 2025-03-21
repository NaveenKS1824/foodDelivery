import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import foodItemsSlice from "./foodItemsSlice";
import authReducer from "./authSlice";
const store = configureStore({
    reducer:{
        cartItem:cartSlice,
        food:productSlice,
        FItem:foodItemsSlice,
        auth : authReducer,
    }
})

export default store;