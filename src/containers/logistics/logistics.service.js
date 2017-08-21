import axios from '../../config/axios';
import logisticsState from './logistics.state';

//获取产品列表
export function getLogistics(data,cb,errorCb) {
    axios({
        method: 'POST',
        url: 'http://localhost:8080/webapp/order/api/order/ldOrder/queryProduct',
        params: data,
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(function (data) {
        cb(data)
    }).catch(function (error) {
        errorCb(error)
    })

}

