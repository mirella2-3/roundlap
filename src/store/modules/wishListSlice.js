import { createSlice } from '@reduxjs/toolkit';

const wishSlice = createSlice({
    name: 'wish',
    initialState: {
        wishItems: [],
    },
    reducers: {
        addWish: (state, action) => {
            const exists = state.wishItems.find((item) => item.id === action.payload.id);
            if (!exists) state.wishItems.push(action.payload);
        },
        removeWish: (state, action) => {
            state.wishItems = state.wishItems.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addWish, removeWish } = wishSlice.actions;
export default wishSlice.reducer;
