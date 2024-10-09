import {createSlice} from '@reduxjs/toolkit';
import { foodItems } from '../data';
const productSlice = createSlice({
    name:"products",
    initialState:{
        foodItem:foodItems,
    },
    reducers:{
        searchItem:(state,action)=>{
            if(action.payload!=''){
                state.foodItem=foodItems.filter((item)=>(item.category.toLowerCase().includes(action.payload.toLowerCase())));
            }
            else{
                state.foodItem=[''];
            }
        }
    }
})

export const {searchItem}= productSlice.actions;
export default productSlice.reducer;