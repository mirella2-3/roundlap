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
            const exist = state.cartItems.find((i) => i.id === item.id);

            if (!exist) {
                state.cartItems.push({ ...item, quantity: 1 });
            } else {
                // 이미 추가된 item이면 아무 작업도 하지 않음
                // 이렇게 하면 이벤트가 두 번 발생해도 한 번만 Cart에 추가
                return;
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
