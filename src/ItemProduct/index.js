import React, {Component} from 'react';

import './index.scss';

const ItemProduct = ({product, mode}) => {
    if (!mode || mode == 1)
        return (<div className='item'>
            <img src={product.productVisual}/>
            <div>
                <div>{product.productName}</div>
                <div>{product.productContent}</div>
                <div>{product.price}</div>
            </div>
        </div>)
    if (mode == 2)
        return (<div className='item2'>
            <img src={product.productVisual}/>
            <div>
                <div>{product.productName}</div>
                <div>{product.productContent}</div>
                <div>{product.price}</div>
            </div>
        </div>)
    if (mode == 3)
        return (<div className='item3'>
            <img src={product.productVisual}/>
            <div>
                <div>{product.productName}</div>
                <div>{product.productContent}</div>
                <div>{product.price}</div>
            </div>
        </div>)
    if(mode==4)
        return (<div className='item4'>
            <img src={product.productVisual}/>
            <div>
                <div>{product.productName}</div>
                <div>{product.productContent}</div>
                <div>{product.price}</div>
            </div>
        </div>)
}

export default ItemProduct