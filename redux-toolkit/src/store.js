import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Correct import for your cartSlice

const store = configureStore({
  reducer: {
    cartBtn: cartReducer 
  }
});

export default store;
