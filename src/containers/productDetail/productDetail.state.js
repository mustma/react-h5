import { observable, action } from 'mobx';

class productDetailState {
    constructor() {
        this.beff = true;
    }
    @observable state = {
        telValue:'',//电话号码
    };

    @action goToAllComment() {
       window.appHistory.push('all-comment');
    }

}



export default new productDetailState();
