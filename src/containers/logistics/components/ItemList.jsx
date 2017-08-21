import React from 'react';
import Star from '../../../components/star/Star';

import './components.scss';

class ItemList extends React.Component {
    render() {
        const item = this.props.item;
        const starBox = (
            <div className='item-star'>
                {this.isStarTiele(item)}
                <Star score={item.review}/>
                <span>{item.review}分</span>
            </div>
        )


        return (
            <div className='item-list'>
                <ul className="product-tags">
                    { this.isProductTags(item) }
                </ul>
                <h3 className='item-list-title'>{item.firstReceiverCompName}</h3>
                <div className='item-active'>
                    {item.productLevel == '004' ? <div>暂无评价</div> : starBox}
                </div>
                <div className='item-active'>交易次数：<span>{item.tradeNum}票</span></div>
                <div className='item-active'>运输时效：<span>{item.duration}小时</span></div>
                <div className='item-monery'>
                    <span>{item.totalPrice}</span><i>.00</i>
                </div>
            </div>
        )
    }

    isStarTiele(item) {
        if (item.productLevel == '001') {
            return <i className="active1"></i>
        }
        if (item.productLevel == '002') {
            return <i className="active2"></i>
        }
        if (item.productLevel == '003') {
            return <i className="active3"></i>
        }
    }

    isProductTags(item) {
        const arr = item.productTags;
        return arr.map((item, index) => {
            return <li key={index}></li>
        })
    }


}

export default ItemList