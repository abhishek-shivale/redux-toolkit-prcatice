import { createSlice } from '@reduxjs/toolkit';

export const AddtoCart = createSlice({
    name: 'cart',
    initialState: {
        value: []
    },
    reducers: {
        addtoCart: (state, action) => {
            state.value.push(action.payload);
        },
        removeFromCart: (state,action)=>{
            state.value = state.value.filter((product)=>product.id!=action.payload)
        }
    }
});

export const { addtoCart ,removeFromCart } = AddtoCart.actions;
export default AddtoCart.reducer;
