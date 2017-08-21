import React from 'react';
import { observer } from 'mobx-react';
import { List, InputItem,Button, WhiteSpace, Toast } from 'antd-mobile';

@observer
class productDetail extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="company-detail">
                <div className="company-name">
                 {this.props.companyInfo.companyName}<icon className='company-icon'></icon>
               
                </div>
                  <div className='tags'>
               {
               	this.props.companyInfo.tags.map((item,index)=>{
               		return  <label className='tag'>{item}</label>;
               	})
               }
                 
                  </div>
                 <hr></hr>
                 <div  className="company-info">
                <div className="contract">
                 <div className='tel-info'><label>座机: </label>{this.props.companyInfo.tel}</div>
                 <div className='mobile-info'><label>手机号码: </label>{this.props.companyInfo.mobile}</div>
                  <icon className='icon-tel'></icon>
                </div>
                  <hr></hr>
                <div className='fache-shijian'><label>发车时间:  </label>{this.props.companyInfo.openStartTime}-{this.props.companyInfo.endTime}
                <icon className='wenhao'></icon>
                </div>
            </div></div>
        )
    }
}
export default productDetail;