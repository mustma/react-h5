import React from 'react';
import { observer } from 'mobx-react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import Comment from './component/Comment.component';
import './allComment.scss';
import getComment  from  './allComment.service';
const TabPane = Tabs.TabPane;
@observer
class AllComment extends React.Component {

	constructor(props) {
		super(props)
		getComment();
		this.state = {
			comments2:[],
			comments: [{
				nickname: "张三",
				score: 4,
				content: "效率高，服务质量好，祝老板生意兴隆！",
				postdate: "2017-04-10",
				replys: [{
					nickname: "张三",
					content: "承运商回复：谢谢光临，欢迎下次再来"
				}]
			}, {
				nickname: "张三",
				score: 5,
				content: "效率高，服务质量好，祝老板生意兴隆！",
				postdate: "2017-04-10",
				replys: []
			}, {
				nickname: "张三",
				score: 4,
				content: "效率高，服务质量好，祝老板生意兴隆！",
				postdate: "2017-04-10",
				replys: [{
					nickname: "张三",
					content: "承运商回复：谢谢光临，欢迎下次再来"
				}]
			}, {
				nickname: "张三",
				score: 5,
				content: "效率高，服务质量好，祝老板生意兴隆！",
				postdate: "2017-04-10",
				replys: []
			}]
		}
		this.callback = this.callback.bind(this);

	}
	callback() {
      this.setState({
      	comments2:this.state.comments.splice(0,parseInt(Math.random(0,1)*4)+1)
      })
	}
	render() {
		return(
			<div className='page-comments'>
          <Tabs defaultActiveKey="1"  animated={false} onChange={this.callback} onTabClick={ this.handleTabClick}>
          <TabPane tab="评价" key="1" >
          <div style={{ display: 'flex', backgroundColor: '#f5f5f5'}}>
              <div className='comments'>
                {
                	 this.state.comments.map(function(item,index){
                	 	return  (<Comment commentInfo={item}></Comment>)
                	 })
                }    
                </div>
        </div>
      </TabPane>
      <TabPane tab="好评" key="2">
        <div style={{ display: 'flex', backgroundColor: '#f5f5f5' }}>
              <div className='comments'>
                {
                	 this.state.comments2.map(function(item,index){
                	 	return  (<Comment commentInfo={item}></Comment>)
                	 })
                }
                  
                </div>
        </div>
      </TabPane>
      <TabPane tab="中评" key="3">
         <div style={{ display: 'flex', backgroundColor: '#f5f5f5' }}>
              <div className='comments'>
                {
                	 this.state.comments2.map(function(item,index){
                	 	return  (<Comment commentInfo={item}></Comment>)
                	 })
                }
                  
                </div>
        </div>
      </TabPane>
        <TabPane tab="差评" key="4">
         <div style={{ display: 'flex', backgroundColor: '#f5f5f5' }}>
              <div className='comments'>
                {
                	 this.state.comments2.map(function(item,index){
                	 	return  (<Comment commentInfo={item}></Comment>)
                	 })
                }
                  
                </div>
        </div>
      </TabPane>
    </Tabs>
    <WhiteSpace />
          
            </div>
		)
	}
}

export default AllComment;