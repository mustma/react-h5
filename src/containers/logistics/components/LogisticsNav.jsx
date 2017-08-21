import React from 'react';

import local from '../../../helpers/locallStorage';
import logisticsState from '../logistics.state';
import { getLogistics } from '../logistics.service';

import './components.scss';

class LogisticsNav extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            navArr: ['综合排序','价格', '时效', '评分', '交易数'],
            index: 1,
            beff: true
        }
    }

    componentDidMount(){

    }

    render() {
        const navArr = this.state.navArr;
        let active = this.state.index;
        return(
            <div>
                <ul className='Logistics-list'>
                    {/*{*/}
                        {/*navArr.map((item,index)=>{*/}
                            {/*return (*/}
                                {/*<li data-index={index+1} onClick={this.navHandleClick.bind(this,index)} key={index} className={index==active? 'li-active': ''}>{item}</li>*/}
                            {/*)*/}
                        {/*})*/}
                    {/*}*/}

                    <li className={this.state.index==1? 'li-active': ''} onClick={this.navHandleClick.bind(this)} data-index="1">综合排序</li>
                    <li className={(this.state.index==2 || this.state.index==3)? 'li-active': ''}  onClick={this.navHandleClick.bind(this)} data-index="2">价格</li>
                    <li className={this.state.index==4? 'li-active': ''} onClick={this.navHandleClick.bind(this)} data-index="4">时效</li>
                    <li className={this.state.index==5? 'li-active': ''} onClick={this.navHandleClick.bind(this)} data-index="5">评分</li>
                    <li className={this.state.index==6? 'li-active': ''} onClick={this.navHandleClick.bind(this)} data-index="6">交易数</li>

                </ul>
            </div>
        )
    }

    // navHandleClick(index,e) {
    //     const data= logisticsState.container.dada || JSON.parse(local.getItem('productData'));
    //     data.data.body.sortType=index+1;
    //     console.log(e.target.dataset.index)
    //
    //     this.setState({
    //         index: index
    //     })
    //
    //     this.getData(data);
    // }

    navHandleClick(e){
        const data= logisticsState.container.dada || JSON.parse(local.getItem('productData'));

        if(e.target.dataset.index==2){
            e.target.dataset.index=3
            data.data.body.sortType=3;
        }else if(e.target.dataset.index == 3){
            e.target.dataset.index=2
            data.data.body.sortType=2;
        }else {
            data.data.body.sortType=e.target.dataset.index;
        }

        this.setState({
            index: e.target.dataset.index
        })

        this.getData(data);
    }

    //发送请求
    getData(data){
        var self = this;
        if(this.state.beff){
            this.setState({
                beff: false
            })
            getLogistics(data,function (data) {
                logisticsState.setQueryProduct(data.data.body.ldProducts)
                self.setState({
                    beff: true
                })
            },function (error) {
                console.log(error)
            })
        }
    }



}

export default LogisticsNav;