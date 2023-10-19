import {CategoryUrl, ICategory, IProduct} from "../../../Entities/Product";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ProductsState {
    isLoading: boolean,
    isError: boolean,
    data: IProduct[]
}

const initialState: ProductsState = {
    isLoading: false,
    isError: false,
    data: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchData(state){
            state.isError = false
            state.isLoading = true
            state.data = []
        },
        fetchDataSuccess(state, action: PayloadAction<IProduct[]>) {
            state.isError = false
            state.isLoading = false
            state.data = action.payload
        },
        fetchDataError(state){
            state.isError = true
            state.isLoading = false
            state.data = []
        },

    }
})