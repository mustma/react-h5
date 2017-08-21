import React from 'react';
import { observer } from 'mobx-react';
import { Toast, WhiteSpace, WingBlank, Button, Icon } from 'antd-mobile';
import util from '../../helpers/util';
import './bankReconciliationDetail.scss';
import Header from '../bankReconciliation/component/Header.component';
import bankReconciliation from '../bankReconciliation/bankReconciliation.service';
import DefaultComponent from './component/Default.component';
import AccountZhuanZhang from './component/AccountZhuanZhang.component';
import CongZhi from './component/CongZhi.component';
import DaiCongZhi from './component/DaiCongZhi.component';
import TiXian from './component/TiXian.component';
@observer
class BankReconciliationDetail extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: {}
		}
		window.tagName = "";
	}
	componentDidMount() {
		this.getDetail();
	}
	render() {
		var info = this.state.data;
		var status =this.getStatus(info);
		var type = this.getImage(info);
		var headerConfig = {
			'noRightBar':true,
			leftbar:{
				text:"账单列表",
				page:"bank-reconciliation"
			}
		}
		return(
		
			<div className="views views-in">
			<Header config={headerConfig}></Header>
	        <div className="page">
	            <div className="content bills-detail">
	                <div className={"status "+status }>{status&&status=='success'?'交易成功':status=='fail'?'到账失败':'处理中'}</div>
	                <div className="amount"><b className={info.state=="1"?'add':''}>{{"1":'+',"2":'-'}[info.state]}{info.amount}</b></div>
	                <div className="company-name scale-1px scale-1px-top">
	                    <div className={"logo icon-"+type}></div>
	                    <div className="name"><span>{tagName}</span></div>
	                </div>
	                <div className="step scale-1px scale-1px-top">
		                    <div className={!info.createTime?"hide":"node success first"}>
		                        <div className="line start"><span className="sopt"></span></div>
		                        <div className="stat">付款成功</div>
		                        <div className="time">{info.createTime&&new Date(info.createTime.replace(/-/g, "/")).Format("yyyy/MM/dd hh:mm")}</div>
		                    </div>
		                    <div className={"node success second"+this.getSecondSpotClass(status,info.createTime)}>
		                        <div className="line"><span className="sopt"></span></div>
		                        <div className="stat">银行处理中</div>
		                        <div className="time">{info.createTime&&new Date(info.createTime.replace(/-/g, "/")).Format("yyyy/MM/dd hh:mm")}</div>
	                       </div>
		                    <div className={"node third "+this.getThirdSpotClass(status,info.updateTime)}>
		                        <div className="line end"><span className="sopt"></span></div>
		                        <div className="stat">到账成功</div>
		                        <div className="time">{info.updateTime&&new Date(info.updateTime.replace(/-/g, "/")).Format("yyyy/MM/dd hh:mm")}</div>
		                    </div>
	                  
	                </div>
	                {this.getSubComponent(info)}    
	            </div>
	        </div>
	    </div>
		)
	}
	getStatus(item) {
		if(item.isArrival == "0") {
			return "fail"
		} else if(item.isArrival == "1") {
			return "success"
		} else if(item.operatorType == "提现" && (item.isArrival == "3" || item.isArrival == "4")) {
			return "ing";
		}else{
			return '';
		}

	}
	getSecondSpotClass(status,t){
		if(!t){
			return " hide";
		}else{
		if(status=="success"){
			return " hide ";
		}else if(status=="fail"){
			return " hide ";
		}else{
			return " show";
		}	
		}	
	}
	getThirdSpotClass(status,t){
		if(!t){
			return " hide";
		}else{
			if(status=="success"){
			return " success";
		}else if(status=="fail"){
			return " fail";
		}else{
			return " hide";
		}
		}
	}
	getSubComponent(info) {
		if(info.operatorType == "充值") {
			return(<CongZhi info={info}></CongZhi>)
		} else if(info.operatorType == "账户互账") {
			return(<AccountZhuanZhang info={info}></AccountZhuanZhang>)
		} else if(info.operatorType == "代充值") {
			return(<DaiCongZhi info={info}></DaiCongZhi>)
		} else if(info.operatorType == "提现") {
			return(<TiXian info={info}></TiXian>);
		} else {
			return(<DefaultComponent info={info}></DefaultComponent>)
		}

	}
	getImage(item) {
		if(["充值", "代充值", "账户互转", "提现"].indexOf(item.operatorType) > -1) {
			if(item.tradeType == "1") {
				tagName = "中国银行";
				return "bank";
			} else if(item.tradeType == "2") {
				tagName = "微信";
				return "wechat";
			} else if(item.tradeType == "3") {
				tagName = "银联";
				return "union";
			} else if(item.tradeType == "5") {
				tagName = "快捷支付";
				return "fast-pay";
			} else {
				tagName = item.userId;
				return "fast-pay";
			}
		} else {
			tagName = item.userId;
			return "ziyouzijin";
		}

	}
	getDetail() {
		var createTimeFrom = new Date(parseInt(util.getQueryString("time"))).Format("yyyy-MM-dd hh:mm:ss");
		var createTimeTo = new Date(parseInt(util.getQueryString("time")) + 1000).Format("yyyy-MM-dd hh:mm:ss");
		var that = this;
		Toast.loading('加载中...', 0 ,()=>{console.log('callback')}, false);
		bankReconciliation({
				"createTimeFrom": createTimeFrom,
				"createTimeTo": createTimeTo,
				"operatorType": "A",
				"page": 1,
				"pagesize": 10,
				"userId":localStorage.getItem("userid")||localStorage.getItem("userId")
			}, function(data) {
				Toast.hide();
			
				that.setState({
					data: data.data.records[0]
				})

			},
			function(err) {
              Toast.hide();
			});
	}
}
export default BankReconciliationDetail;