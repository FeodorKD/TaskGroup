import React, {FC} from 'react';
import {IProduct} from "../../Entities/Product";
import {Button, Card} from "antd";
import AppImage from "../../Shared/ui/Image/AppImage";
import classes from "./ProductCart.module.css";
import { useNavigate } from "react-router-dom";
interface CardProps  {
    product: IProduct,
}

const ProductCart:FC<CardProps> = ({product}) => {
    const navigate = useNavigate()
    const clickHandler = (id: number) => {
        navigate(`/product/${id}`)
    }

    return (
        <Card
            size="small"
            hoverable={true}
            title={product.category}
            bodyStyle={{display:"flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}
        >
            <AppImage alt={product.title} src={product.image}/>
            <p>
                {product.title}
            </p>
            <p className={classes.price}>
                {`${product.price}` + '$'}
            </p>
            <Button type="primary" size="small" onClick={() => clickHandler(product.id)}>View</Button>
        </Card>
    );
};

export default ProductCart;