import React from 'react';
import { observer } from 'mobx-react';
import { Toast, WhiteSpace, WingBlank, Button, Icon } from 'antd-mobile';
import './bankReconciliation.scss';
import util from '../../helpers/util';
import bankReconciliation from './bankReconciliation.service';
import Header from './component/Header.component';
import bankReconciliationState from './bankReconciliation.state';
@observer
class BankReconciliation extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			list: [],
			hasMore: false,
			firstLoad:true
		}
		window.pageInfo = {
			page: 1,
			pageSize: 10
		};
		this.goToDetail = this.goToDetail.bind(this);
	}
	componentDidMount() {
		this.getMore();
	}
	render() {

		const tradeTypes = ["", "bank", "wechat", "union", "", "kuaijie"];
		const status = ["未到账", "已到帐", "提现中", "审核中"];
		var that = this;
		return(
			<div className="views views-in">
	    		<Header></Header>
			  <div className="page">
		            <div className="content bills">
		               {
		               !this.state.list||this.state.list.length==0?
		                 this.getSubComponent():this.getContent()
		               	 
		               }
		            </div>
		        </div>
         </div>

		)
	}
   getSubComponent(){
   	if(!this.state.firstLoad){
   		return(<div className="nothing">暂无记录</div>)
   	}
   }
   getContent(){
   	var that = this;
   	return (
   		<div>
   		{
			this.state.list.map(function(item2,i){
		    	 	return(
		    	 	    <div>
		    	 			<div className="title scale-1px-top">{that.formatMonth(item2.createTime)}</div>
				    	 		 <ul className="list scale-1px-top">
				    	 		    {
					    	 		   item2.data.map(function(item,i){
				                   return(
				                 	 	<li  className='scale-1px' onClick={()=>{that.goToDetail(item.createTime)}}>
					                        <div className="fl date">{that.formatTime(item.createTime)}</div>
					                        <div className={'fl bank-icon icon-'+that.getImage(item)} ></div>
					                        <div className="fl amount"><b className={item.state=="1"?'add':''}>{item.state=="2"?'-':'+'}{item.amount}</b><br /><span className='desc'>{item.operatorType}{item.amountType?'-'+item.amountType:''}</span></div>
					                        <div className="status">{that.getStatus(item)}</div>
				                         </li>
				                        )
				                     })
				    	 		     }
				    	 		    </ul>
		    	 		    </div>
		    	 		   )
	                 }
		    	    )
   		}
   		<div className={"more scale-1px scale-1px-top hidden-"+!that.state.hasMore} onClick={that.getMore.bind(that)}>更多</div>
   	   </div>)
   }
	formatMonth(d) {
		var d1 = new Date(d).getMonth()
		var cur = new Date().getMonth();
		if(cur == d1) {
			return "本月"
		} else {
			return d;
		}
	}
	formatTime(time) {
		time =  time.replace(/-/g, "/");
		var today = new Date(new Date().Format("yyyy/MM/dd") + " 00:00:00").getTime();
		var yesterday = new Date(new Date().Format("yyyy/MM/dd") + " 00:00:00").getTime() - 1000 * 60 * 60 * 24;
		var qiantian = new Date(new Date().Format("yyyy/MM/dd") + " 00:00:00").getTime() - 1000 * 60 * 60 * 24 * 2;
		const cur = new Date().getDay();
		const t1 = new Date(time).getTime();
		const d2 = time.substring(5, 10);
		const week = ["", "一", "二", "三", "四", "五", "六", "日"];
		if(t1 > today) {
			return "今天" + time.substring(10, 16);
		} else if(t1 > yesterday && t1 < today) {
			return "昨天" + time.substring(10, 16);
		} else if(t1 < yesterday && t1 > qiantian) {
			return "前天" + time.substring(10, 16);
		} else {
			return "周" + week[new Date(time).getDay()] + "   " + d2;
		}

	}
	getImage(item) {
		if(["充值", "代充值", "账户互转", "提现"].indexOf(item.operatorType) > -1) {
			if(item.tradeType == "1") {
				return "bank";
			} else if(item.tradeType == "2") {
				return "wechat";
			} else if(item.tradeType == "3") {
				return "union";
			} else {
				return "fast-pay";
			}
		} else {
			return "ziyouzijin";
		}

	}
	getStatus(item) {
		if(item.isArrival == "0") {
			return "fail"
		} else if(item.isArrival == "1") {
			return ""
		} else if(item.operatorType == "提现" && (item.isArrival == "3" || item.isArrival == "4")) {
			return "ing";
		}

	}
	groupByDate(arr) {
		var map = {},
			dest = [];
		for(var i = 0; i < arr.length; i++) {
			var ai = arr[i];
			ai["_createTime"] = ai["createTime"].substring(0, 7);
			ai["createTime"] = ai["createTime"];
			if(!map[ai._createTime]) {
				dest.push({
					createTime: ai._createTime,
					data: [ai]
				});
				map[ai._createTime] = ai;
			} else {
				for(var j = 0; j < dest.length; j++) {
					var dj = dest[j];
					if(dj.createTime == ai._createTime) {
						dj.data.push(ai);
						break;
					}
				}
			}
		}
		var groups = this.state.list.map(function(item) {
			return item.createTime;
		})
		for(var i = 0; i < dest.length; i++) {
			var _index = groups.indexOf(dest[i].createTime);
			if(_index > -1) {
				this.state.list[_index].data = this.state.list[_index].data.concat(dest[i].data);
			} else {
				this.state.list = this.state.list.concat(dest[i]);
			}
		}
		return this.state.list
	}
	getMore() {
		var that = this;
		var params = bankReconciliationState.container.queryParams;
		if(!params.values) {
			params = bankReconciliationState.container.queryParams = {
				dates: util.getThreeMonth()[1],
				values: "A"
			}
		}
		Toast.loading('加载中...', 0 ,()=>{console.log('callback')}, false);
		bankReconciliation({
				"createTimeFrom": params.dates.type && params.dates.type == 'all' ? params.dates.firstday : (params.dates.show + '-' + params.dates.firstDay),
				"createTimeTo": params.dates.type && params.dates.type == 'all' ? params.dates.lastday : (params.dates.show + "-" + params.dates.lastDay),
				"operatorType": params.values,
				"page": pageInfo.page,
				"pagesize": pageInfo.pageSize,
				"userId":localStorage.getItem("userid")||localStorage.getItem("userId")
			}, function(data) {
				 Toast.hide();
				if(data.data.records != undefined) {
					that.setState({
						hasMore: true,
						firstLoad:false,
						list: that.groupByDate(data.data.records)
					})
					pageInfo.page++;
				} else {
					that.setState({
						firstLoad:false,
						hasMore: false
					});
				}
			},
			function(error) {
				that.setState({
						firstLoad:false,
						hasMore: false
				});
                 Toast.hide();
			});
	}
	goToDetail(date) {
		date = date.replace(/-/g, "/");
		window.appHistory.push('bank-reconciliation-detail?time=' + new Date(date).getTime());
	}
}

export default BankReconciliation;