import React from 'react';
import Wallet from '../components/Wallet';
import axios from 'axios';
import locall from '../../../helpers/locallStorage';
import {observer} from 'mobx-react';
import { Toast, WhiteSpace, WingBlank, Button, Icon } from 'antd-mobile';
import walletDate from '../wallet.state';

import { getUserAssets } from '../wallet.service';

@observer
export default class HeadWallet extends React.Component {
    constructor() {
        super()
        this.state= {
            countUserAssets: '',//总资产
            canDrawMoney:''//可体现余额e
        }
    }

    componentDidMount(){
        var self = this;

        Toast.loading('加载中...', 0 ,()=>{console.log('callback')}, false);
        //通过openid获取用户信息

        // 首先获取用户信息 回掉里面获得资产
        // appState.getUserInfo(function (data) {
        //
        //     walletDate.setUser(data.data.data)
        //         //获取用户资产
        //         axios.post('http://1739r5521c.iask.in/mcos/wallet/api/account/getMyWallet', {
        //             phoneNum: appState.phoneNum, userId: appState.userId, type: 1, orgId:''
        //         }).then(function (data) {
        //             //console.log(data.data.data)
        //             self.setState({
        //                 countUserAssets: data.data.data.countUserAssets,
        //                 canDrawMoney: data.data.data.canDrawMoney
        //             })
        //         }).catch((error)=>{
        //             console.log('获取用户资产 HeadWallet: ',error)
        //         })
        // });
        // 获取用户资产
        getUserAssets(function (data) {
            self.setState({
                countUserAssets: data.data.data.countUserAssets,
                canDrawMoney: data.data.data.canDrawMoney
            })
            Toast.hide();
        })

    }

    render() {
        return(
            <div>
                <Wallet zcze={this.state.countUserAssets || ''} zcfe={this.state.canDrawMoney || ''} />
            </div>
        )
    }
}