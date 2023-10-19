import React, {FC} from 'react';
import {IProduct} from "../../Entities/Product";
import {Card} from "antd";
import AppImage from "../../Shared/ui/Image/AppImage";
import classes from "./ProductCart.module.css";
import { Link} from "react-router-dom";
interface CardProps  {
    product: IProduct,
}

const ProductCart:FC<CardProps> = ({product}) => {


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
            <Link to={`/product/${product.id}`}>View</Link>
        </Card>
    );
};

export default ProductCart;