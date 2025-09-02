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
            const item = action.payload;
            const existingItem = state.cartItems.find((i) => i.id === item.id);

            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                state.cartItems.push(item);
            }
        },
        removeCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const { id, type } = action.payload;
            const item = state.cartItems.find((item) => item.id === id);
            if (item) {
                if (type === 'increment') item.quantity += 1;
                if (type === 'decrement' && item.quantity > 1) item.quantity -= 1;
            }
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

export const { addCart, removeCart, updateQuantity, toggleCart, openCart, closeCart } =
    cartSlice.actions;
export default cartSlice.reducer;
