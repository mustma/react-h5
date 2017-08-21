import React from 'react';
import { observer } from 'mobx-react';
import productDetailState from './productDetail.state.js';
import { List, InputItem, Button, WhiteSpace, Toast } from 'antd-mobile';
import CommentInfo from './component/Comment';
import CompanyInfo from './component/CompanyInfo';
import SummaryInfo from './component/SummaryInfo';
import PriceDesc from './component/PriceDesc';
import DescTable from './component/DescTable';
import './productDetail.scss';

@observer
class productDetail extends React.Component {
	constructor() {
		super();
		this.state = {
			companyInfo: {
				companyName: "上海市极速物流有限公司",
				openStartTime: "06:00",
				endTime: "18:00",
				tel: "021-33890080",
				mobile: "13773014328",
				status:"brand",
				tags:["卡行保障","正品保障","极速快运"]

			},
			priceDesc: {
				"freight": 200,
				"takingFee": 200,
				"packgingFee": 200,
				"totalFee": 600

			},
			commentInfo:{
				score:4,
				count:588,
				comment:{
					content:" 时效很快，性价比比较高，线路高效，以后发货就选这家了， 决定长期合作！！！",
					nickname:"寂寞异乡人",
				}
			},
			summaryInfo: {
				status:"recommend",
				from: {
					province: "上海",
					area: "普陀区"

				},
				to: {
					province: "北京",
					area: "朝阳区"
				},
				time: "90",
				orderTimes: "1"
			}
		}
//		this.goToComment = this.goToComment.bind(this);
	}
	render() {

		return(
			<div className={"productDetail "+this.state.summaryInfo.status}>
            <SummaryInfo summaryInfo={this.state.summaryInfo}></SummaryInfo>
            <CompanyInfo companyInfo={this.state.companyInfo}></CompanyInfo>
            <div className="blank-space"></div>
            <PriceDesc priceDesc={this.state.priceDesc}></PriceDesc>  
             <div className="blank-space"></div>
             <CommentInfo commentInfo={this.state.commentInfo}></CommentInfo>
               <div className="blank-space"></div>
             <DescTable></DescTable>
              <div className="blank-space"></div>
              <button className='xiadan' >立即下单</button>
            </div>
		)
	}
}
export default productDetail;