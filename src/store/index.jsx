import { configureStore } from '@reduxjs/toolkit';
import pagination from './modules/paginationSlice';
import notice from './modules/noticeSlice';
import faq from './modules/faqSlice';
import product from './modules/productSlice';
import magazine from './modules/megazineSlice';
import event from './modules/EventSlice';
import order from './modules/OrderSlice';
import wish from './modules/WishListSlice';
import cart from './modules/CartSlice';
import recommend from './modules/recommendSlice';
import auth from './modules/authSlice';
import modal from './modules/modalSlice';
import user from './modules/UserSlice';

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
