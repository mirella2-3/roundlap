import { createSlice } from '@reduxjs/toolkit';
import noticeData from '../../assets/api/noticeData';

const initialState = {};
export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchNotice: (state, action) => {
            const text = action.payload;
            state.notices = noticeData.filter((notice) =>
                notice.category.toLowerCase().includes(text.toLowerCase())
            );
        },
    },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
