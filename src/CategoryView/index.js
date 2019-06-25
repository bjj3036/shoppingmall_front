import React, {Component} from 'react';
import ProductList from '../ProductList'
import {inject, observer} from "mobx-react";

import './index.scss'

@inject('stores')
@observer
class Index extends Component {

    state = {
        id: 0,
        categoryName: ''
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.id != this.props.match.params.id) {
            this.props.stores.CategoryStore.getCategory(this.props.match.params.id)
        }
    }

    async componentDidMount() {
        if (this.props.match)
            this.props.stores.CategoryStore.getCategory(this.props.match.params.id)
    }

    render() {
        let product = [{
            id: 1,
            productVisual: 'https://thumbnail12.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/2623/044756918a0ecd9a67bc882a159ebfd743104ddf2ee4ad38708a8f1ea75c.JPG',
            productName: '온더리버 키노 도트 랩 스커트',
            price: 11900
        }, {
            id: 2,
            productVisual: 'https://thumbnail12.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/2623/044756918a0ecd9a67bc882a159ebfd743104ddf2ee4ad38708a8f1ea75c.JPG',
            productName: '온더리버 키노 도트 랩 스커트',
            price: 11900
        }, {
            id: 3,
            productVisual: 'https://thumbnail12.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/2623/044756918a0ecd9a67bc882a159ebfd743104ddf2ee4ad38708a8f1ea75c.JPG',
            productName: '온더리버 키노 도트 랩 스커트',
            price: 11900
        }, {
            id: 4,
            productVisual: 'https://thumbnail12.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/2623/044756918a0ecd9a67bc882a159ebfd743104ddf2ee4ad38708a8f1ea75c.JPG',
            productName: '온더리버 키노 도트 랩 스커트',
            price: 11900
        },]
        return (
            <div className='root'>
                <aside></aside>
                <section>
                    <h1>{this.props.stores.CategoryStore.category&&this.props.stores.CategoryStore.category.categoryName}</h1>
                    <img src='/main_top.png'/>
                    <div>
                        신상품코너
                        <ProductList products={product}/>
                    </div>
                    <div>
                        MD 추천상품
                        <ProductList products={product}/>
                    </div>
                    <div>
                        인기상품
                    </div>
                </section>
            </div>
        );
    }
}

export default Index;