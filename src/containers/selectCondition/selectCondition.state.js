import { observable, action } from 'mobx';

class selectConditionState {
    constructor() {
        this.beff = true;
    }
    @observable container = {
       queryParams:{
       	values:"",
       	dates:""
       }
    }
    
   @action setParams(field,t){
   	 this.container.queryParams[field] = t;
   }
  

}



export default new selectConditionState();
