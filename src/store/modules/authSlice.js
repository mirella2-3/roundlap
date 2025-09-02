import { createSlice } from '@reduxjs/toolkit';
const memberData = [
    {
        id: 1,
        name: 'af',
        tel: '010-1111-2222',
        password: 'a1234',
        loginId: 'af',
    },
];
const initialState = {
    members: localStorage.getItem('members')
        ? JSON.parse(localStorage.getItem('members'))
        : memberData,
    authed: localStorage.getItem('authed') ? JSON.parse(localStorage.getItem('authed')) : false,
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
};
let no = initialState.members.length + 1;
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.authed = true;
            state.user = {
                name: action.payload.name,
                loginId: action.payload.loginId,
            };
        },
        loginSuccess: (state, action) => {
            // 카카오 로그인용
            const user = action.payload;
            state.authed = true;
            state.user = user;
            localStorage.setItem('authed', JSON.stringify(true));
            localStorage.setItem('user', JSON.stringify(user));
        },
        logout: (state) => {
            state.authed = false;
            state.user = null;
            localStorage.setItem('authed', JSON.stringify(false));
            localStorage.removeItem('user');
        },
        signup: (state, action) => {
            action.payload.id = no++;
            state.members.push({
                ...action.payload,
                loginId: action.payload.loginId,
                password: action.payload.password,
            });
            localStorage.setItem('members', JSON.stringify(state.members));
        },
    },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
