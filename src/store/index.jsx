import { configureStore } from '@reduxjs/toolkit';
import pagination from './modules/paginationSlice';
import notice from './modules/noticeSlice';
import faq from './modules/faqSlice';
import product from './modules/productSlice';

const store = configureStore({
    reducer: {
        pagination,
        notice,
        faq,
        product,
    },
});

export default store;
