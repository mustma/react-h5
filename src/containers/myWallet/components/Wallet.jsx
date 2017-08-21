import React from 'react';
import './wallet.scss';
import local from '../../../helpers/locallStorage';

export default class Wallet extends React.Component{
    render() {
        return(
            <div className="wallet-box">
                <div className="avatar-box">
                    <div className="avatar">
                        { local.getItem('headPortrait') !=null? <img src={local.getItem('headPortrait')} alt=""/>: <img className="avatar-img" src={require('../img/avatar.png')} alt=""/> }
                    </div>
                    <p className="name">{local.getItem('strNickName') ? local.getItem('strNickName') : local.getItem('loginName')}</p>
                </div>
                <div className="money-box">
                    <div>
                        <div>
                            {this.props.zcze? <span>¥{this.props.zcze}</span>:''}
                        </div>

                        <p>资产总额</p>
                    </div>

                    <div>
                        <div>
                            {this.props.zcze? <span>¥{this.props.zcfe}</span>:''}
                        </div>
                        <p>负债总额</p>
                    </div>
                </div>
            </div>
        )
    }
}