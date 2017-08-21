import React from 'react';
import { observer } from 'mobx-react';
@observer
class DaiCongZhi extends React.Component {

	constructor(props) {
		super(props)

	}
	render() {
		let info = this.props.info;
		return(
			<div className=''>
                 <ul className="list">
                    <li>
                        <div className="name">代他人充值</div>
                        <div className="value">{info.tradeNo}</div>
                    </li>
                    <li>
                        <div className="name">订单号</div>
                        <div className="value">{info.externalNo}</div>
                    </li>
                    <li>
                        <div className="name">交易类型</div>
                        <div className="value">账户代他人充值</div>
                    </li>
                    <li className="">
                        <div className="name">操作人</div>
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

export default DaiCongZhi;