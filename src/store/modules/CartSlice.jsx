import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    isCartOpen: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const exists = state.cartItems.find((item) => item.id === action.payload.id);
            if (!exists) state.cartItems.push(action.payload);
        },
        removeCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        },
        toggleCart: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },
        openCart: (state) => {
            state.isCartOpen = true;
        },
        closeCart: (state) => {
            state.isCartOpen = false;
        },
    },
});

export const { addCart, removeCart, toggleCart, openCart, closeCart } = cartSlice.actions;
export default cartSlice.reducer;
