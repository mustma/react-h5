import React from 'react';
import Star from '../../../../components/star/Star'

import './content.scss';

export default class Content extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = this.props.data;
        //console.log(data)
        const itemStar = (
            <div className="title-star-box">
                <i>推荐</i>
                <Star score={data.star}/>
                <span>5分</span>
            </div>
        )
        return (
            <div className="item-content">
                <div className="title">
                    <div className="u-title">
                        <span>{data.title}</span>
                        <i>人气</i>
                    </div>
                    { itemStar }
                </div>

                <div className="s-content">
                    <div className="address">
                        <span>上海</span>
                        <div className="time">
                            <span>时间</span>
                            <img src={require('../../img/矩形-13-拷贝-3@2x.png')} alt=""/>
                            <p>交易次数：985票</p>
                        </div>
                        <span>天津</span>
                    </div>
                    <div className="monery-box">
                        <div className="monery"><span>100元</span>100元</div>
                        <div className="monery"><span>100元</span>100元</div>
                    </div>
                </div>
            </div>
        )


    }
}