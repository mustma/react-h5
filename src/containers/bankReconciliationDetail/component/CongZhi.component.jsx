import React from 'react';
import { observer } from 'mobx-react';
@observer
class CongZhi extends React.Component {

	constructor(props) {
		super(props)
	}
	render() {
		let info = this.props.info;
		return(
			<div className=''>
                <ul className="list">
                    <li>
                        <div className="name">支付凭证号</div>
                        <div className="value">{info.tradeNo}</div>
                    </li>
                    <li>
                        <div className="name">订单号</div>
                        <div className="value">{info.externalNo}</div>
                    </li>
                    <li>
                        <div className="name">交易类型</div>
                        <div className="value">账户充值</div>
                    </li>
                    <li className=" active">
                        <div className="name">到账资金仓</div>
                        <div className="value">{info.assetsName}</div>
                    </li>
                    <li>
                        <div className="name">结算时间</div>
                        <div className="value">{info.updateTime}</div>
                    </li>
                    <li>
                        <div className="name">创建时间</div>
                        <div className="value">{info.createTime}</div>
                    </li>
	              </ul>
            </div>
		)
	}
}

export default CongZhi;
