import { observable, action } from 'mobx';

class loginState {
    constructor() {
        this.beff = true;
    }
    @observable state = {
        telValue:'',//电话号码
        code: ''
    };

    @action setPhone(tel) {
        this.state.telValue = tel.replace(/\s+/g,"");
    }

}



export default new loginState();
