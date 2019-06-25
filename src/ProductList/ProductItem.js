import React, {Component} from 'react';
import {Link} from "react-router-dom";

const ProductItem = ({product, mode}) => {
    return (
        <Link to={'/product/'+product.id}>
            <div className={'item' + mode}>
                <img src={product.productVisual}/>
                <div>
                    <div>{product.productName}</div>
                    <div>{product.productContent}</div>
                    <div>{product.price}</div>
                </div>
            </div>
        </Link>)
}

export default ProductItem