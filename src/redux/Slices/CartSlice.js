import { createSlice } from "@reduxjs/toolkit";



export const CartSlice = createSlice({

    initialState : [],
    name : 'cart',
    reducers : {
        addtoCart : (state, action) => {
					state.push(action.payload)
				},
        removeFromCart : (state , action) => {
					return state.filter((item)=>item.id !== action.payload)
				},
    }
})

export const  { addtoCart , removeFromCart} = CartSlice.actions ;
export default CartSlice.reducer;