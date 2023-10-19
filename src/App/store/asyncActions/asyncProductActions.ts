import {AppDispatch} from "../index";
import {productsSlice} from "../reducers/productsSlice";
import axios from "axios";
import {CategoryUrl, IProduct} from "../../../Entities/Product";

export const fetchProducts = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(productsSlice.actions.fetchData())
        const response = await axios.get<IProduct[]>(
            'https://fakestoreapi.com/products')
        dispatch(productsSlice.actions.fetchDataSuccess(response.data))
    } catch (err) {
        dispatch(productsSlice.actions.fetchDataError())
    }
}


export const fetchCategoryProducts  = (url: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productsSlice.actions.fetchData())
        const response = await axios.get<IProduct[]>(
            `https://fakestoreapi.com/products/category/${url}`
        )
        dispatch(productsSlice.actions.fetchDataSuccess(response.data))
    } catch (err) {
        dispatch(productsSlice.actions.fetchDataError())
    }
}