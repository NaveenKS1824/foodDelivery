import {createSlice} from '@reduxjs/toolkit';
const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{
        addCartItem:(state,action)=>{
            state.cart.push({...action.payload,quantity:1});
        },
        incrementItems:(state,action)=>{
            const selected = state.cart.find((item)=>
            (item.id === action.payload.id));
            selected.quantity+=1;
        },
        decrementItems:(state,action)=>{
            const selected1= state.cart.find((item)=>(item.id===action.payload.id));
            selected1.quantity==0?selected1.quantity=0:selected1.quantity-=1;
        },
        removeCartItem:(state,action)=>{
            state.cart=state.cart.filter((item)=>(action.payload.id!=item.id));
        }
    }

});

export const {addCartItem,incrementItems,decrementItems,removeCartItem} = cartSlice.actions;
export default cartSlice.reducer;