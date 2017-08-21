import React from 'react';
import { observer } from 'mobx-react';
import logisticsTrackService from './logisticsTrack.service';
import logisticsTrackState from './logisticsTrack.state';
import './logisticsTrack.scss';
import direction from './img/direction@2x.png';
import box from './img/box@2x.png';
@observer
class logisticsTrack extends React.Component {
	constructor() {
		super();
		this.state = {
			number: "11212313445",
			status: "运输中",
			from: {
				city: "浦东新区",
				province: "上海市"
			},
			to: {
				city: "阿瓦特县",
				province: "阿克苏地区"
			},
			events: [{
				time: "2017-09-08",
				desc: "车辆到达南京枢纽"
			}, {
				time: "2017-09-08",
				desc: "已发车"
			}, {
				time: "2017-09-08",
				desc: "费用确认"
			}, {
				time: "2017-09-08",
				desc: "创建订单"
			}]
		}

	}
	render() {
		return(
			<div className='logistics-track-page'>
        		<div className='summary-info'>
        		    <div className='top-info'>
            			<div><label className='num-label'>运单号</label>13773014328<label>运输中</label></div>
            		</div>
            		<hr />
            		<div className='where'>
            		 <div className='from-area'><span className='province-name'>{this.state.from.province}</span><span className='area-name'>{this.state.from.city}</span></div>
            		 <div className='direction'><img src={direction}/></div>
            		 <div className='to-area'><span className='province-name'>{this.state.to.province}</span><span className='area-name'>{this.state.to.city}</span></div>
            		</div>
            		<div className='product-info'>
            		<img src={box} className='box'/><label>苹果</label>
            		<span className='tag'><i>|</i>30件</span><span className='tag'><i>|</i>100千克</span><span className='tag'><i>|</i>3.5万</span>
            		</div>
            		<hr/>
            </div>
            <div className='timeline-info'>
             	<div className='time-line-title'>物流跟踪</div>
             	
            	 	<div className='time-line-wrapper'>
            	 		<div className='time-lines'>
            	   {
                	 this.state.events.map(function(item,index){
                	 	return  (
                	 		<div className='time-stone'>
                	 	       <div className='dots'>
                	 	       <i></i>
                	 	       </div>
                	 	       <div className='content'>
                	 	       		<div className='time'>{item.time}</div>
                	 	       		<div className='post-date'>{item.desc}</div>
                	 	       		 <div className='split'></div>
                	 	       </div>
                	 	        
                	 	    </div>
                	 	  
                	 	    );
                	 })
                }
            	 </div>
            	 	</div>
           </div>
        </div>
		)
	}
}
export default logisticsTrack;