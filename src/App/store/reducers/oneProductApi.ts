import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProduct} from "../../../Entities/Product";

export const oneProductApi = createApi({
    reducerPath: 'oneProductApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com'
    }),
    tagTypes: ['OneProduct'],
    endpoints: (build) => ({
        fetchOneProduct: build.query<IProduct, number>({
            query: (id) => ({
                url: `/products/${id}`
            })
        })
    })
})
