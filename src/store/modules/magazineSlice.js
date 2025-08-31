import { createSlice } from '@reduxjs/toolkit';
import magazineData from '../../assets/api/magazineData';

const initialState = {
    magazines: magazineData,
    currentPage: 1,
    itemsPerPage: 9,
};

export const magazineSlice = createSlice({
    name: 'magazine',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
});

export const magazineActions = magazineSlice.actions;
export default magazineSlice.reducer;
