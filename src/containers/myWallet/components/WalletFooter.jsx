import React from 'react';
import { getCode }  from '../wallet.service';
import { Toast } from 'antd-mobile'

import './wallet.scss';

export default class WalletFooter extends React.Component{
    render() {
        return(
            <div className="wallet-footer">
                <div data-index="4" onClick={this.handleClick.bind(this)}>充值</div>
                <div data-index="5" onClick={this.handleClick.bind(this)}>账单</div>
                <div>银行卡</div>
            </div>
        )
    }

    handleClick(e) {
        Toast.hide();
        let condeNum = e.target.dataset.index
        getCode(condeNum)
    }

}