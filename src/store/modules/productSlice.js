import { createSlice } from '@reduxjs/toolkit';
import { allProductData } from '../../assets/api/productData';

const initialState = {
    products: [],
    filtered: [],
    selectedCategory: '',
    currentPage: 1,
    itemsPerPage: 16,
};

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

            state.currentPage = 1; // 필터링 후 페이지 초기화
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setItemsPerPage: (state, action) => {
            state.itemsPerPage = action.payload;
        },
    },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
