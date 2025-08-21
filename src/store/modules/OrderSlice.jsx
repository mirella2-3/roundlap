import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orderItems: [],
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrderItem: (state, action) => {
            state.orderItems = [action.payload];
        },
        addOrderItem: (state, action) => {
            state.orderItems.push(action.payload);
        },
        resetOrder: (state) => {
            state.orderItems = [];
        },
    },
});

export const { setOrderItem, addOrderItem, resetOrder } = orderSlice.actions;
export default orderSlice.reducer;
