import axios from '../../config/axios';
import walletDate from './wallet.state';
import { Toast } from 'antd-mobile';
import locsl from '../../helpers/locallStorage';

export function getUserAssets(cb) {
        //获取用户资产
        axios.post('/wallet/api/account/getMyWallet', {
            phoneNum: locsl.getItem('loginName'), userId:  locsl.getItem('userId'), type: 1, orgId:''
        }).then(function (data) {
            //console.log(data.data.data)
            cb(data);
        }).catch((error)=>{
            console.log('获取用户资产 HeadWallet: ',error)
            Toast.loading('获取信息失败...', 3 ,()=>{console.log('callback')}, false);
        })
    //})
}


//充值 通过code 跳转页面
export function getCode(codeNum) {
    axios.get('/wechat/route/routeByPageCode?pageCode='+codeNum).then((data)=>{
        console.log(data)
        goRouter(data)
    })
}

function goRouter(data) {
    //路由跳转判断
    const isHttp=/^[http]/;

    if(!data.data.data) {
        Toast.info('系统维护中...', 1.5);
        return;
    }

    if(isHttp.test(data.data.data)){
        window.location.href=data.data.data
    }else {
        //window.location.href=data.data.data
        window.appHistory.push(data.data.data)
    }
}