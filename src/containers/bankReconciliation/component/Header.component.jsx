import React from 'react';
import { observer } from 'mobx-react';
import './header.scss';
@observer
class Header extends React.Component {

	constructor(props) {
		super(props)
	}
	render() {
		const hiddenRightBar = this.props.config&&this.props.config.noRightBar;
		const leftInfo = (this.props.config&&this.props.config.leftbar)||{text:"钱包",page:"wallet"};
		return(
			<header className="cf scale-1px">
				<ul class="cf">
					<li className='bar'><a href="javascript:void(0)" onClick={this.goToMyWallet.bind(this,leftInfo.page)} className="Return"><i className='back-icon'></i>{leftInfo.text||'钱包'}</a></li>	
					<li className='middle'></li>
					<li className={"orange hidden-"+hiddenRightBar} id="filter" onClick={this.goToFilter.bind(this)}>筛选</li>
					
					
				</ul>
	         </header>
		)
	}
	goToMyWallet(page){
		window.appHistory.push(page);
	}
	goToFilter() {
		window.appHistory.push('select-condition');
	}
}

export default Header;