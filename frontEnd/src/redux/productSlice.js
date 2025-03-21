import {createSlice} from '@reduxjs/toolkit';
import { foodItems } from '../data';
import { fetchFoodItem } from './foodItemsSlice';
import { act } from 'react';
const productSlice = createSlice({
    name:"products",
    initialState:{
        foodItem:[],
        fullItems:[],
    },
    reducers:{
        searchItem:(state,action)=>{
            if(action.payload!=''){
                state.foodItem=state.fullItems.filter((item)=>(item.category.toLowerCase().includes(action.payload.toLowerCase())));
            }
            else{
                state.foodItem=[...state.fullItems];
            }
        },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchFoodItem.fulfilled,(state,action)=>{
            state.foodItem=action.payload;
            state.fullItems=action.payload;
        })
        .addCase(fetchFoodItem.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(fetchFoodItem.pending,(state)=>{
            state.loading = true;
        });
    }
})

export const {searchItem}= productSlice.actions;
export default productSlice.reducer;