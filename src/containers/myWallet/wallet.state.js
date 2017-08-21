import { observable, action} from 'mobx';

/*
//新老板客户端对应不同的key值
左新  右老
 var Request = new Object();
 var strKey = "loginName";
 var strPwd = "password";
 var strUserId="userId";//buyId
 var strUserType="userType";
 var strOpenId="openId";

 */

class WalletData {
    @observable container= {
        userData: {}
    }


    @action setUser(data) {
        this.container.userData = data;
    }
}


export default new WalletData()
