import { configureStore } from '@reduxjs/toolkit';
import pagination from './modules/paginationSlice';
import notice from './modules/noticeSlice';
import faq from './modules/faqSlice';
import product from './modules/productSlice';
import magazine from './modules/megazineSlice';
import event from './modules/EventSlice';
import order from './modules/OrderSlice';

const store = configureStore({
    reducer: {
        pagination,
        notice,
        faq,
        product,
        magazine,
        event,
        order,
    },
});

export default store;
