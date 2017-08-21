import React from 'react';
import {observer} from 'mobx-react';
import productState from '../productSearch.state';


import {Button, Picker, List, WhiteSpace } from 'antd-mobile';
import { city } from './city';

import './components.scss';


// 如果不是使用 List.Item 作为 children
const CustomChildren = props => (
    <div
        onClick={props.onClick}
        //style={{ backgroundColor: '#fff' }}
    >
        <div style={{ display: 'flex', height: '0.9rem', lineHeight: '0.9rem',position:'relative' }}>
            <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
            <div style={{ textAlign: 'right', color: '#888',position: 'absolute', left: 0, top:0, height: '100%' }}>{props.extra}</div>
        </div>
    </div>
);

@observer
export default class PickerCity extends React.Component{

    constructor (props) {
        super(props)
        this.key = this.props.start;
        this.state = {
            cols: 1,
            //pickerValue:  productState.container[this.key],
            //asyncValue: [],
            data: city,
            values: [],
        }
    }



    render() {

        return(
            <div className={this.props.start}>
                <Picker
                    data={ city }
                    title="选择地区"
                    extra={this.props.text}
                    value={ productState.container[this.key] }
                    //onPickerChange={this.onPickerChange}
                    onChange={v => productState.container[this.key]=v}
                     onOk={ v => {
                         this.handleOk.call(this,v)
                         //console.log(this.state.pickerValue)
                     } }
                    format = {(values) =>{
                        this.handleMat.call(this,values)
                        return values.join(',')
                    }}
                >
                    <CustomChildren></CustomChildren>
                </Picker>
            </div>
        )
    }
    handleMat(values) {
        if(this.key == 'startStationCode') {
            productState.container.startCity = values;
        }else{
            productState.container.endCity = values;
        }

    }

    // 操作mobxstate的开始和结束城市
    handleOk(v) {
        productState.container[this.key] = v;
        console.log()
    }


}