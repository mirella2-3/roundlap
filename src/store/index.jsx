import { configureStore } from '@reduxjs/toolkit';
import pagination from './modules/paginationSlice';
import notice from './modules/noticeSlice';
import search from './modules/searchSlice';

const store = configureStore({
    reducer: {
        pagination,
        notice,
        search,
    },
});

export default store;
