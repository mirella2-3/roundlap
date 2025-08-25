import { createSlice } from '@reduxjs/toolkit';
import CartModal from '../../components/cart/cartModal';
import WishModal from '../../components/cart/WishModal';

const initialState = {
    isCartModalOpen: false,
    isWishModalOpen: false,
    
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openCartModal(state) {
            state.isCartModalOpen = true;
        },
        closeCartModal(state) {
            state.isCartModalOpen = false;
        },
        openWishModal(state) {
            state.isWishModalOpen = true;
        },
        closeWishModal(state) {
            state.isWishModalOpen = false;
        },
    },
});

export const { openCartModal, closeCartModal, openWishModal, closeWishModal } = modalSlice.actions;
export default modalSlice.reducer;
