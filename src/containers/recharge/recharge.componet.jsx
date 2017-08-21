import React from 'react';
import {  InputItem } from 'antd-mobile';

import './recharge.scss';


export default class Recharge extends React.Component{

    constructor(props) {
        super(props)
        this.state={
            monery:'',
            moneryState: false
        }
    }

    render() {
        return(
            <div className="recharge-wrap">
                <div className="recharge-header">
                    <div className="icon"></div>
                    <div>
                        <h3>微信</h3>
                        <span>每笔收取千分之三手续费</span>
                    </div>
                </div>

                <div>
                    <InputItem
                        type="number"
                        onChange={this.handleChange.bind(this)}
                        extra="¥"
                        placeholder="请输入充值金额"
                    >金额(元)</InputItem>
                </div>

                <button onClick={this.handleClick.bind(this)} className={"sub-btn "+ (this.state.moneryState? "sub-btn-color": '')}>确认支付</button>
            </div>
        )
    }

    handleChange(text) {
        if(text.length > 0) {
            this.setState({
                monery: text,
                moneryState: true
            })
        }else {
            this.setState({
                monery: '',
                moneryState: false
            })
        }

    }

    handleClick() {
        var beff = this.state.moneryState;
        if(beff) {
            alert (this.state.monery)
        }
    }
}