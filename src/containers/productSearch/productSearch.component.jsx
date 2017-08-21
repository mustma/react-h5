import React from 'react';

import {observer} from 'mobx-react';
import productState from './productSearch.state';
import logistics from '../logistics/logistics.state';
import { getProuduct } from './productSearch.service';

import ProductSwitch from './components/ProductSwitch';
import local from '../../helpers/locallStorage';
//import FromTo from './components/FromTo';

import {Button, Picker, Toast, List, WhiteSpace } from 'antd-mobile';
import PickerCity from './components/picker';

import './productSearch.scss';
@observer
class ProductSearch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            url1: './img/from.png',
            weight:'',
            volume:''
        }
    }

    render() {
        return (
            <div className='product-wrap'>
                <div className='product-content'>
                    <div className='switch-box'>
                        <div className='switch-box-active'>
                            <ProductSwitch id='checked1' checked={productState.container.checked1}></ProductSwitch>
                            <span>上门取货</span>
                        </div>
                        <div className='switch-box-active'>
                            <ProductSwitch id='checked2'  checked={productState.container.checked2}></ProductSwitch>
                            <span>送货上门</span>
                        </div>
                    </div>

                    <div className='from-to'>
                        <div className='from'>
                            {/*<FromTo isUrl="1" placeholderText='从哪里寄' text={productState.container.fromText[0]} />*/}
                            <PickerCity text="从哪里寄" start="startStationCode" startCity={productState.container.startStationCode} />
                        </div>
                        <div
                            className='switch-address'
                            style={{
                            height: '1px'
                        }}>
                            <div className='address' onClick={this.handleFormText.bind(this)}></div>
                        </div>
                        <div className='to'>
                            {/*<FromTo placeholderText='寄往哪里' text={productState.container.fromText[1]} />*/}
                            <PickerCity text="寄往哪里"  start="endStationCode" startCity={productState.container.endStationCode} />
                        </div>
                    </div>

                    <div className='quality'>
                        <div className='quality-active'>
                            <span>重量</span>
                            <input onChange={ this.handleWeight.bind(this) } type='number' />
                            <span>kg</span>
                        </div>
                        <div className='quality-active'>
                            <span>体积</span>
                            <input onChange={ this.handlevolume.bind(this) } type='number' />
                            <span>m³</span>
                        </div>
                    </div>
                </div>

                <div className='btn-box'>
                    <Button className="btn" onClick={ this.getProduct.bind(this) }>查询</Button>
                </div>
            </div>
        )
    }
    //反转地址
    handleFormText() {
        //console.log(productState.container.fromText)
        if(productState.container.startStationCode.length !=0){
            productState.fromTextReverse();
        }
    }

    //存储重量 体积
    handleWeight(e) {
        this.setState({
            weight: e.target.value
        })
    }
    handlevolume(e) {
        this.setState({
            volume: e.target.value
        })
    }


    /*
     startStationCode	是	string	出发地：四川 成都 双流
     endStationCode	是	string	到达地：上海 上海
     startLat	否	string	出发纬度
     startLng	否	string	出发经度
     endLat	否	string	到达纬度
     endLng	否	string	达到经度
     weight	否	string	重量
     volume	否	string	体积
     needsPickUpPro	否	boolean	是否需要提货
     needsDeliveryPro	否	boolean	是否需要配送
     sortType	否	Integer	排序方式：1：综合 2：价格又低到高 3：价格由高到底 4：时效 5：评论数 6：承运数
    */


    getProduct() {
        const data = {
            "data" : {
                "body": {
                    "startStationCode": productState.container.startCity.join(' ').replace(/市/g,''),
                    "endStationCode": productState.container.endCity.join(' ').replace(/市/g,''),
                    "weight": this.state.weight,
                    "volume": this.state.volume,
                    "needsPickUpPro": productState.container.checked1,
                    "needsDeliveryPro": productState.container.checked2,
                    "sortType":"1"
                }
            }
        }
        //console.log(data.data.body.startStationCode)

        //分别数据保存到 mobx state 和 local中
        logistics.container.data = data;
        local.setItem('productData',JSON.stringify(data));

        if(data.data.body.startStationCode.length != 0 && productState.container.endCity.length !=0) {
            window.appHistory.push('logistics');
        }else {
            Toast.info('请输入地址', 1.5);
        }

    }
}

export default ProductSearch;