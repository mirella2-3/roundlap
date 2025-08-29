import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pageData: [],
    totalCount: 0,
    perPage: 10,
    currentPage: 1,
    totalPages: 1,
};

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.pageData = [...action.payload].sort((a, b) => b.id - a.id);
            state.totalCount = state.pageData.length;
            state.totalPages = Math.ceil(state.totalCount / state.perPage);
            state.currentPage = 1;
        },

        setCurrentPage: (state, action) => {
            const num = action.payload;
            if (num >= 1 && num <= state.totalPages) {
                state.currentPage = num;
            }
        },

        goToPage: (state, action) => {
            const num = action.payload;
            if (num >= 1 && num <= state.totalPages) {
                state.currentPage = num;
            }
        },

        nextPage: (state) => {
            if (state.currentPage < state.totalPages) {
                state.currentPage += 1;
            }
        },
        prevPage: (state) => {
            if (state.currentPage > 1) {
                state.currentPage--;
            }
        },

        goToFirstPage: (state) => {
            state.currentPage = 1;
        },
        goToLastPage: (state) => {
            state.currentPage = state.totalPages;
        },
    },
});

export const paginationActions = paginationSlice.actions;
export default paginationSlice.reducer;
