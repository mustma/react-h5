import React from 'react';
import { observer } from 'mobx-react';
@observer
class List extends React.Component {

	constructor(props) {
		super(props)
	}
	render() {
		const list = this.props.list;
		return(
			<div>
				 {
				 	 	list.map(function(item2,i){
						    	 	return(
						    	 	    <div>
						    	 			<div className="title">{that.formatMonth(item2.createTime)}</div>
								    	 		 <ul className="list">
								    	 		    {
									    	 		   item2.data.map(function(item,i){
								                   return(
								                 	 	<li onClick={()=>{that.goToDetail(item.createTime)}}>
									                        <div className="fl date">{that.formatTime(item.createTime)}</div>
									                        <div className={'fl bank-icon icon-'+that.getImage(item)} ></div>
									                        <div className="fl amount"><b>+{item.amount}</b><br />{item.operatorType}-{item.amountType}</div>
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
			</div>
		)
	}

}
export default List;