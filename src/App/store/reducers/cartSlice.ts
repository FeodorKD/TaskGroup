import {IProduct} from "../../../Entities/Product";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CartState {
    products: IProduct[]
}

const initialState: CartState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<IProduct>) {
            state.products.push(action.payload)
        },
        deleteProduct(state, action: PayloadAction<number>) {
            state.products.filter( product => product.id !== action.payload)
        }
    }
})
