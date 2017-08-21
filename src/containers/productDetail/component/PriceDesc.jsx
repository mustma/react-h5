import React from 'react';
import { observer } from 'mobx-react';
import { List, InputItem,Button, WhiteSpace, Toast } from 'antd-mobile';

@observer
class priceDesc extends React.Component{
    constructor(props) {
        super(props);
       
    }
    render() {
        return (
            <div className="price-desc">
             <div className="price-item">
                <label>长途运费: </label>   <label className='value'> {this.props.priceDesc.freight}</label></div>
                
                  <div className="price-item">
                 <label>取货费: </label>     <label className='value'>{this.props.priceDesc.takingFee}</label></div>
              
                  <div className="price-item">
                 <label>配送费: </label>
                    <label className='value'> {this.props.priceDesc.packgingFee}</label>
                </div>
                   <div className="price-item">
                 <label>预计估价: </label>  <label className='value '> <span className='total'>{this.props.priceDesc.totalFee}</span>元</label></div>
                
             
               
            </div>
        )
    }
}
export default priceDesc;