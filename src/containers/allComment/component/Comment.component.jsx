import React from 'react';

import { observer } from 'mobx-react';
import './comment.scss';
import Star from '../../../components/star/Star';

@observer
class AllComment extends React.Component {

	constructor(props) {
		super(props)

	}
	render() {
		let commentInfo = this.props.commentInfo;
		return(
			<div className='comment'>
                <div className='top-info'><label className='nickname'>{commentInfo.nickname}</label><label className='post-date'>{commentInfo.postdate}</label></div>
                <div className='star-info'>
                 <Star score={commentInfo.score}></Star><span className='score-num'>{commentInfo.score}分</span>
                </div>
                 <div className='content-info'>{commentInfo.content}</div>
                  {
                  	commentInfo.replys.map(function(item,index){
                	 	return  (<div className='reply-info'><span></span>{item.content}</div>);
                	   })
                }
            </div>
		)
	}
}

export default AllComment;