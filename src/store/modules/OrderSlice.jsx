import { createSlice, createSelector } from '@reduxjs/toolkit';

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
            state.orderItems = Array.isArray(action.payload) ? action.payload : [action.payload];
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

// Memoized selector
export const selectOrderItems = createSelector(
    (state) => state.order.orderItems,
    (orderItems) => orderItems.map((item) => ({ ...item, status: 'paid' }))
);

export const { setOrderItems, addOrderItem, setOrderSummary, resetOrder, addOrderHistory } =
    orderSlice.actions;

export default orderSlice.reducer;
