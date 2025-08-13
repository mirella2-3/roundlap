import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    pageData: [], // 전체 데이터
    totalCount: 0, // 전체 데이터 수
    perPage: 10, // 페이지당 개수
    currentPage: 1, // 현재 페이지
    totalPages: 1, // 전체 페이지 수
};

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setData: (state, action) => {
            // 오름차순 마지막 작성된 글이 처음으로
            state.pageData = [...action.payload].sort((a, b) => b.id - a.id);

            state.totalCount = state.pageData.length;
            state.totalPages = Math.ceil(state.totalCount / state.perPage);

            // 처음 들어왔을때 현재 페이지는 1
            state.currentPage = 1;
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
