import { createSlice } from '@reduxjs/toolkit';

const memberData = [
    {
        id: 1,
        name: '홍길동',
        tel: '010-1111-2222',
        email: 'abc@naver.com',
        password: 'a1234',
    },
];

const initialState = {
    // members: [],
    members: localStorage.getItem('members')
        ? JSON.parse(localStorage.getItem('members'))
        : memberData,

    // authed: false,
    authed: localStorage.getItem('authed') ? JSON.parse(localStorage.getItem('authed')) : false,

    // user: null,
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
};
let no = initialState.members.length + 1;
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { email, password } = action.payload;
            const item = state.members.find((member) => member.email === email);
            if (item && item.password === password) {
                state.authed = true;
                state.user = item;
            }
            localStorage.setItem('authed', JSON.stringify(state.authed));
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        logout: (state, action) => {
            state.authed = false;
            state.user = null;
            localStorage.setItem('authed', JSON.stringify(state.authed));
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        signup: (state, action) => {
            action.payload.id = no++;
            state.members.push(action.payload);
            localStorage.setItem('members', JSON.stringify(state.members));
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
