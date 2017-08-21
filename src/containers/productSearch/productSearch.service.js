import axios from 'axios';

//获取产品列表
export function getProuduct(data) {
    axios({
        method: 'POST',
        url: 'http://192.168.0.111:8080/webapp/order/api/order/ldOrder/queryProduct',
        params: data,
        // headers: {
        //     'Content-Type': 'application/json',
        // }
    }).then(function (data) {
        console.log(data)
    })
}