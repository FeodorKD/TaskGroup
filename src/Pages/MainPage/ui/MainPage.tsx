import React, {FC, MouseEventHandler, useEffect} from 'react';
import classes from "./MainPage.module.css";
import ProductCart from "../../../Widgets/ProductCart/ProductCart";
import {Button, Layout, Menu} from "antd";
import {useTypedSelector} from "../../../Shared/hooks/useTypedSelector";
import {useTypedDispatch} from "../../../Shared/hooks/useTypedDispatch";
import {fetchProducts} from "../../../App/store/asyncActions/asyncProductActions";
import {useActions} from "../../../Shared/hooks/useActions";
import AppSelect from "../../../Shared/ui/Select/AppSelect";
import {authSlice} from "../../../App/store/reducers/authSlice";

const MainPage: FC = () => {
    const dispatch = useTypedDispatch()
    const {isError, isLoading, data} = useTypedSelector(state => state.products)

    const {fetchProducts, fetchCategoryProducts} = useActions()

    useEffect(() => {
        fetchProducts()
    }, [])

    const onChange = (value: string) => {
        if (value === 'all') {
            fetchProducts()
        } else {
            fetchCategoryProducts(value)
        }

    };

    const clickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
        localStorage.setItem('isAuth', 'false')
        dispatch(authSlice.actions.logout())
    }


    return (
        <Layout>
            <Layout.Header>
                <Menu theme="dark" className={classes.menu}>
                    <AppSelect onChange={onChange}/>
                    <Button type='primary' size='large' onClick={clickHandler}>Exit</Button>
                </Menu>
            </Layout.Header>
            <Layout.Content className={classes.content}>
                {data && data.map(product => (
                    <ProductCart key={product.id} product={product}/>
                ))}
            </Layout.Content>
        </Layout>
    );
};

export default MainPage;