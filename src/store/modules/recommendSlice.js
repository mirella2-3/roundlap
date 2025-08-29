import { createSlice } from '@reduxjs/toolkit';
import { allProductData } from '../../assets/api/productData';

const initialState = {
    products: allProductData,
};

export const recommendSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
});

export const recommendActions = recommendSlice.actions;
export default recommendSlice.reducer;
