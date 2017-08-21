import React from 'react';
import { observer } from 'mobx-react';
import { List, InputItem,Button, WhiteSpace, Toast } from 'antd-mobile';
import directionWhite from '../img/direction-white.png';
import direction from '../img/direction.png';
@observer
class summaryInfo extends React.Component{
    constructor(props) {
        super(props);
       
    }
    getDirection(d) {
      if((['brand','authentication','recommend']).indexOf(d.status)>-1){
      	 return directionWhite;
      }else{
      	return direction;
      }
    }
    render() {
    	  var data = this.props.summaryInfo;
        return (
            <div className='summary-info'>
                <div className="card">
                <div className="from-wehere">
                 <div className='province'>{data.from.province}</div>
                   <div className='city'>{data.from.area}</div>
                </div>
                <div className='direction'>
                  <div>{data.time}小时</div>
                   <img src={this.getDirection(data)} className='direction-icon'></img>
                    <div>交易次数:{data.orderTimes}票</div>
                </div>
                <div className='destination'>
                  <div className='province'>{data.to.province}</div>
                    <div className='city'>{data.to.area}</div>
                </div>
                 
                  
                </div>
            </div>
        )
    }
}
export default summaryInfo;