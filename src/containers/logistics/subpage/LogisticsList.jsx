import React from'react';
import ItemList from '../components/ItemList';
import {observer} from 'mobx-react';
import logisticsState from '../logistics.state';
import local from '../../../helpers/locallStorage';
import { getLogistics } from '../logistics.service';
import {Toast} from 'antd-mobile';
@observer
class LogisticsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: logisticsState.container.dada || JSON.parse(local.getItem('productData')),
            ldProducts: [],
        }

        this.httpLogistics.bind(this)
    }

    componentDidMount() {
        this.httpLogistics();
    }

    // 后去搜索数据 发送请求
    httpLogistics() {
        var self = this;
        if (logisticsState.container.dada != null || local.getItem('productData') != null) {
            //发送请求
            getLogistics(this.state.data1, function (data) {

                if (self.isData(data.data.body)) {
                    Toast.info('查询地址有误', 3);
                    setTimeout(window.appHistory.push('product'),2)
                    return;
                }

                //数据存储到 mobx当中
                logisticsState.setQueryProduct(data.data.body.ldProducts)



            }, function (error) {
                console.log('错误信息❌ LogisticsList：', error)
            })
        } else {
            window.appHistory.push('product');
        }
    }

    检查获取内容是否为空
    isData(data) {
        if (Object.keys(data).length == 0) {
            return true
        }
    }



    render() {
        var data = logisticsState.container.queryProduct.slice();
        return (
            <ul>
                {
                    data.map((item, index) => {
                        return (
                            <li key={index}>
                                <ItemList item={item}/>
                            </li>
                        )
                    })
                }

            </ul>
        )
    }
}

export default LogisticsList;