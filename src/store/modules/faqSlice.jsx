import { createSlice } from '@reduxjs/toolkit';
import faqData from '../../assets/api/faqData';

const initialState = {
    faqs: faqData,
};

export const faqSlice = createSlice({
    name: 'faq',
    initialState,
    reducers: {},
});

export const faqActions = faqSlice.actions;
export default faqSlice.reducer;
