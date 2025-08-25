import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orderItems: [],
    orderSummary: null,
    orderHistory: [],
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrderItems: (state, action) => {
            state.orderItems = (
                Array.isArray(action.payload) ? action.payload : [action.payload]
            ).map((item) => ({ ...item, status: 'paid' }));
        },
        addOrderItem: (state, action) => {
            state.orderItems.push(action.payload);
        },
        setOrderSummary: (state, action) => {
            state.orderSummary = action.payload;
        },
        resetOrder: (state) => {
            state.orderItems = [];
            state.orderSummary = null;
        },
        addOrderHistory: (state, action) => {
            state.orderHistory.push(...action.payload);
        },
    },
});

export const { setOrderItems, addOrderItem, setOrderSummary, resetOrder, addOrderHistory } =
    orderSlice.actions;
export default orderSlice.reducer;
