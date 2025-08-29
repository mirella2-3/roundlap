import { createSlice } from '@reduxjs/toolkit';
import eventData from '../../assets/api/eventData';

const initialState = {
    events: eventData,
    currentPage: 1,
    itemsPerPage: 9,
};

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
});

export const eventActions = eventSlice.actions;
export default eventSlice.reducer;
