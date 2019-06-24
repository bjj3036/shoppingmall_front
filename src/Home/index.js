import React, {Component} from 'react';
import ItemProduct from '../ItemProduct';

import './index.scss'

class Index extends Component {
    render() {
        let product = {
            productVisual: 'https://thumbnail12.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/2623/044756918a0ecd9a67bc882a159ebfd743104ddf2ee4ad38708a8f1ea75c.JPG',
            productName: '온더리버 키노 도트 랩 스커트',
            price: 11900
        }
        return (
            <div>
                <img className='main_visual' src='/main_top.png'/>
                <div className='main'>
                    <aside className='left'>
                        <p>공동구매</p>
                        <ItemProduct product={product} mode='2'/>
                        <p>이벤트상품</p>
                        <ItemProduct product={product} mode='2'/>
                        <p>이 달의 Best 상품</p>
                        <ItemProduct product={product} mode='2'/>
                    </aside>
                    <section>
                        <div>
                            <p>베스트 추천상품</p>
                            <div className='justifyCenter'>
                                <ItemProduct product={product}/>
                                <ItemProduct product={product}/>
                                <ItemProduct product={product}/>
                            </div>
                        </div>
                        <div>
                            <p>추천상품</p>
                            <div className='justifyCenter wrap'>
                                <ItemProduct product={product} mode='4'/>
                                <ItemProduct product={product} mode='4'/>
                                <ItemProduct product={product} mode='4'/>
                                <ItemProduct product={product} mode='4'/>
                            </div>
                        </div>
                        <div>
                            <p>인기 상품</p>
                            <div className='justifyCenter'>
                                <ItemProduct product={product}/>
                                <ItemProduct product={product}/>
                                <ItemProduct product={product}/>
                                <ItemProduct product={product}/></div>
                        </div>
                        <div>
                            <p>특가 상품</p>
                            <ItemProduct product={product} mode='3'/>
                            <ItemProduct product={product} mode='3'/>
                            <ItemProduct product={product} mode='3'/>
                        </div>
                    </section>
                    <aside className='right'>
                        <div className='banner'>배너식광고</div>
                        <div className='banner'>배너식광고</div>
                        <div className='banner'>배너식광고</div>
                        <div className='banner'>배너식광고</div>
                    </aside>
                </div>
            </div>
        );
    }
}

export default Index;