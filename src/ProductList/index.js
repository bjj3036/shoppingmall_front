import React, {Component} from 'react';
import ProductItem from './ProductItem'

import './index.scss';

const Index = ({products, mode}) => {
    mode = mode || 1
    if (products)
        return (<div className={'productList' + mode}>
            {products.map(e => <ProductItem product={e} mode={mode} key={e.id}/>)}
        </div>)
}

export default Index