import { observable, action } from 'mobx';

class bankReconciliationState {
    constructor() {
        this.beff = true;
    }
    @observable container = {
       queryParams:{
       	
       }
    }
}



export default new bankReconciliationState();