import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {cartSlice} from "./reducers/cartSlice";
import {authSlice} from "./reducers/authSlice";
import {productsSlice} from "./reducers/productsSlice";
import {oneProductApi} from "./reducers/oneProductApi";


const rootReducer = combineReducers({
    cart: cartSlice.reducer,
    login: authSlice.reducer,
    products: productsSlice.reducer,
    [oneProductApi.reducerPath]: oneProductApi.reducer

})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => {
            return getDefaultMiddleware().concat(oneProductApi.middleware)
        },

    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']