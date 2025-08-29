import { configureStore } from '@reduxjs/toolkit';
import pagination from './modules/paginationSlice';
import notice from './modules/noticeSlice';
import faq from './modules/faqSlice';
import product from './modules/productSlice';
import magazine from './modules/magazineSlice';
import event from './modules/eventSlice';
import order from './modules/orderSlice';
import wish from './modules/wishListSlice';
import cart from './modules/cartSlice';
import recommend from './modules/recommendSlice';
import auth from './modules/authSlice';
import modal from './modules/modalSlice';
import user from './modules/userSlice';

const store = configureStore({
    reducer: {
        pagination,
        notice,
        faq,
        product,
        magazine,
        event,
        order,
        wish,
        cart,
        recommend,
        auth,
        modal,
        user,
    },
});

export default store;
