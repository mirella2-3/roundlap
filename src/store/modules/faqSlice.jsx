import { createSlice } from '@reduxjs/toolkit';
import faqData from '../../assets/api/faqData';

const initialState = {
    faqsO: faqData,
    faqsF: faqData,
};

export const faqSlice = createSlice({
    name: 'faq',
    initialState,
    reducers: {
        searchFaq: (state, action) => {
            const text = action.payload;
            state.faqsF = state.faqsO.filter((faq) =>
                faq.title.toLowerCase().includes(text.toLowerCase())
            );
        },
    },
});

export const faqActions = faqSlice.actions;
export default faqSlice.reducer;
