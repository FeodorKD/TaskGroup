import {createSlice} from "@reduxjs/toolkit";

interface AuthState {
    isAuth: boolean
}

const initialState: AuthState = {
    isAuth: localStorage.getItem('isAuth') !== 'false'
}

export const authSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        login(state) {
            state.isAuth = true
        },
        logout(state) {
            state.isAuth = false
        }
    }
})

export default authSlice.reducer