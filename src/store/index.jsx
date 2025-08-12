import { configureStore } from '@reduxjs/toolkit';
import pagination from './modules/paginationSlice';
import notice from './modules/noticeSlice';

const store = configureStore({
    reducer: {
        pagination,
        notice,
    },
});

export default store;
