import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orderItems: [],
    orderSummary: null,
    orderHistory: [],
    usedPoints: 0,
    userPoints: 0,
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrderItems: (state, action) => {
            state.orderItems = Array.isArray(action.payload) ? action.payload : [action.payload];
        },
        addOrderItem: (state, action) => {
            const item = action.payload;
            const exist = state.orderItems.find((i) => i.id === item.id);
            if (exist) {
                exist.quantity = (exist.quantity || 1) + 1;
            } else {
                state.orderItems.push({ ...item, quantity: 1 });
            }
        },

        setOrderSummary: (state, action) => {
            state.orderSummary = action.payload;
        },
        resetOrder: (state) => {
            state.orderItems = [];
            state.orderSummary = null;
            state.usedPoints = 0;
        },
        addOrderHistory: (state, action) => {
            state.orderHistory.push(...action.payload);
        },
        setUsedPoints: (state, action) => {
            state.usedPoints = action.payload;
            state.userPoints = (state.userPoints || 0) - action.payload;
        },
        addUserPoints: (state, action) => {
            state.userPoints += action.payload;
        },
    },
});

export const {
    setOrderItems,
    addOrderItem,
    setOrderSummary,
    resetOrder,
    addOrderHistory,
    setUsedPoints,
    addUserPoints,
} = orderSlice.actions;

export default orderSlice.reducer;
