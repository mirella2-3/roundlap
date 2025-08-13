import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { allProductData } from '../../assets/api/productData';

const initialState = {
    products: [], // 전체 상품
    filtered: [], // 필터링된 상품
    selectedCategory: '', // 현재 선택된 카테고리
};
//이게 xx의 state에 전달

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setAllProducts: (state) => {
            state.products = allProductData;
            state.filtered = allProductData;
        },
        filterByCategory: (state, action) => {
            const category = action.payload;
            state.selectedCategory = category;

            if (category === 'ALL') {
                state.filtered = state.products;
            } else {
                state.filtered = state.products.filter((item) => item.category.includes(category));
            }
        },
    },
});
// export const {onUp, onDown} = countSlice.actions;
export const productActions = productSlice.actions;
export default productSlice.reducer;
