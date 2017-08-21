import React from 'react';
import { observer } from 'mobx-react';
@observer
class AccountZhuanZhang extends React.Component {

	constructor(props) {
		super(props)

	}
	render() {
		let info = this.props.info;
		return(
			
			<div className=''>
                 <ul className="list">
                    <li>
                        <div className="name">转账到</div>
                        <div className="value">{info.assetsName}</div>
                    </li>
                    <li>
                        <div className="name">订单号</div>
                        <div className="value">{info.externalNo}</div>
                    </li>
                    <li>
                        <div className="name">交易类型</div>
                        <div className="value">账户转账</div>
                    </li>
                    <li className=" active">
                        <div className="name">转账公司</div>
                        <div className="value">{info.userId}</div>
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

export default AccountZhuanZhang;
