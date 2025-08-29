import { createSlice } from '@reduxjs/toolkit';
import noticeData from '../../assets/api/noticeData';

const initialState = {
    noticesO: noticeData,
    noticesF: noticeData,
};

export const noticeSlice = createSlice({
    name: 'notice',
    initialState,
    reducers: {
        searchNotice: (state, action) => {
            const text = action.payload;
            state.noticesF = state.noticesO.filter((notice) =>
                notice.title.toLowerCase().includes(text.toLowerCase())
            );
        },

        clearSearchResults: (state) => {
            state.noticesF = state.noticesO;
        },
    },
});

export const noticeActions = noticeSlice.actions;
export default noticeSlice.reducer;
