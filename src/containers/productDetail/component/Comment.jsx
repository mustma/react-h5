import React from 'react';
import { observer } from 'mobx-react';
import productDetailState from '../productDetail.state.js';
import { List, InputItem,Button, WhiteSpace, Toast } from 'antd-mobile';
import avatar from '../img/comment-avatar.png'
import Star from  '../../../components/star/Star';

@observer
class comment extends React.Component{
    constructor(props) {
        super(props);
      
    }
    render() {
        return (
            <div className="comment-info">
                <div className='comment-title'>
                  线路评价<label>(5882)</label>
                 <icon className='icon-arrow' onClick={()=>{productDetailState.goToAllComment()}}></icon>
                </div>
                <div className='comment-rate'>
                 <div className='num'>4.0</div>
                 <div className=''>
                  <label>综合评分:</label>
                    <Star score={this.props.commentInfo.score}></Star>
                    <div><label>好评率:</label>98%</div>
                 </div>
                </div>
                <hr className='split'></hr>
                <div className='comment-container'>
                  <div className='comments'>
                    <div className='comment'>
                     <div className='user-info'>
                     <img className='avatar' src={require('../img/comment-avatar.png')}/><label className='nickname'>zhutj</label>
                     </div>
                     <div className='comment-content'>
                     {this.props.commentInfo.comment.content}
                     </div>
                    </div>
                  </div>
                </div>
                <button className='view-all'  onClick={()=>{productDetailState.goToAllComment()}}>查看全部</button>
            </div>
        )
    }
}
export default comment;