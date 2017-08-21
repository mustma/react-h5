import React from 'react';
import { observer } from 'mobx-react';
import selectConditionService from './selectCondition.service';
import selectConditionState from './selectCondition.state';
import util from '../../helpers/util';
import bankReconciliationState from '../bankReconciliation/bankReconciliation.state';
import Header from '../bankReconciliation/component/Header.component';
import './selectCondition.scss';
@observer
class selectCondition extends React.Component {
	constructor() {
		super();
		this.state = {
			months: util.getThreeMonth(),
			values: [{
					key: "A",
					value: "全部"
				},
				{
					key: "R",
					value: "充值"
				},
				{
					key: "D",
					value: "代充值"
				},
				{
					key: "X",
					value: "提现"
				},
				{
					key: "T",
					value: "账户互转"
				},
				{
					key: "J001",
					value: "枢纽交易"
				},
				{
					key: "J002",
					value: "自主交易"
				},
				{
					key: "J003",
					value: "园区交易"
				},
				{
					key: "J004",
					value: "运力交易"
				},
				{
					key: "J005",
					value: "外发"
				},
				{
					key: "J006",
					value: "自开单"
				},
				{
					key: "J007",
					value: "自发车"
				},
				{
					key: "J008",
					value: "APP交易"
				},
				{
					key: "J009",
					value: "大车落货交易"
				},
				{
					key: "J020",
					value: "其他交易"
				}

			]
		}
		if(bankReconciliationState.container.queryParams.values) {
			selectConditionState.container.queryParams = Object.assign({},bankReconciliationState.container.queryParams)
			;
		} else {
			selectConditionState.container.queryParams = {
				dates: this.state.months[1],
				values: "A"
			};
		}

	}

	render() {
		var headerConfig = {
			'noRightBar': true,
			leftbar:{
				text:"账单列表",
				page:"bank-reconciliation"
			}
		}
		return(
			<div className='page2'>
		     	<Header config={headerConfig}></Header>
	            <div className="content screen">
	                <div className="title">时间</div>
	                <dl className="conts bt">
	                   {this.state.months.map(function(item){
	                   	 return  (<dt className={item.show == selectConditionState.container.queryParams.dates.show? 'dd selected':'dd'}  onClick={()=>{selectConditionState.setParams('dates',item)}}>{item.show}</dt>);
	                   })}
	                </dl>
	                <div className="title">类型</div>
	                <dl className="conts">
	              
	                  {this.state.values.map(function(item){ 
	                   	 return  (<dt className={item.key == selectConditionState.container.queryParams.values? 'dd selected':'dd'}  onClick={()=>{selectConditionState.setParams('values',item.key)}}>{item.value}</dt>);
	                   })}
	                </dl>
	                <div className="btns">
	                    <div className="btn reset fl" onClick={this.reset.bind(this)}>重置</div>
	                    <div className="btn submit fr" onClick={this.ok.bind(this)}>确定</div>
	                </div>
	            </div>
            </div>
		)
	}
	reset() {
		selectConditionState.container.queryParams = {
			dates: this.state.months[1],
			values: "A"
		};
	}
	ok() {
		bankReconciliationState.container.queryParams = selectConditionState.container.queryParams;
		console.log(JSON.stringify(selectConditionState.container.queryParams));
		window.appHistory.push('bank-reconciliation');
	}
}
export default selectCondition;