import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFoodItem = createAsyncThunk(
    'foodItem/fetchFoodItems',
    async()=>{
        const req = await axios.get("http://localhost:3005/api/items/getItems");
        return req.data;
    }
)

const foodItemsSlice = createSlice({
    name:"ItemsList",
    initialState:{
        items:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchFoodItem.pending,(state)=>{
            state.loading=true;
        })
        .addCase(fetchFoodItem.fulfilled,(state,action)=>{
            state.loading=false;
            state.items=action.payload;
        })
        .addCase(fetchFoodItem.rejected,(state,action)=>{
            state.items = action.error.message;
            state.loading=false;
        })
    }
})

export default foodItemsSlice.reducer;