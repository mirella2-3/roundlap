import { configureStore } from '@reduxjs/toolkit';
import pagination from './modules/paginationSlice';
import notice from './modules/noticeSlice';
import search from './modules/searchSlice';
import product from './modules/productSlice';

const store = configureStore({
    reducer: {
        pagination,
        notice,
        search,
        product,
    },
});

export default store;
