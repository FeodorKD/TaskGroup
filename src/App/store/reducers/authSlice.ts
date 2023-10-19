import {createSlice} from "@reduxjs/toolkit";

interface AuthState {
    isAuth: boolean
}

const getInitial = (): boolean => {
    if(!localStorage.getItem('isAuth')){
        return false
    }
    return localStorage.getItem('isAuth') !== 'false'
}

const initialState: AuthState = {
    isAuth: getInitial()
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