import React, {FC} from 'react';
import classes from "./ProductPage.module.css";
import {useParams} from "react-router-dom";
import {oneProductApi} from "../../../App/store/reducers/oneProductApi";
import { useNavigate } from "react-router-dom";
import {Button, Image, Layout, Typography,} from "antd";
const ProductPage: FC = () => {
    const navigate = useNavigate()
    const {id} = useParams<{id?: string}>()
    const {data, isLoading} =  oneProductApi.useFetchOneProductQuery(Number(id))
    if (!data) return (
        <h1>Error in fetching data</h1>
    )

    if (isLoading) return (
        <h1>loading...</h1>
    )

    return (
        <Layout className={classes.layout}>
            <Layout.Content className={classes.container}>
                <Image alt={data.title} src={data.image} width={500} height={700}/>
                <div className={classes.info}>
                    <Typography.Text >
                        {'Price: ' + data.price + '$'}
                    </Typography.Text>
                    <Typography.Text>
                        {'Title: ' + data.title}
                    </Typography.Text>
                    <Typography.Text>
                        {'Category: ' + data.category}
                    </Typography.Text>
                    <Typography.Text>
                        {'Description: ' + data.description}
                    </Typography.Text>
                    <Typography.Text>
                        {'Rating: ' + data.rating.rate}
                    </Typography.Text>
                    <Button type="primary" size="large" onClick={() => navigate(-1)}>Back</Button>
                </div>
            </Layout.Content>
        </Layout>
    )
};

export default ProductPage;