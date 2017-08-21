import { observable, action } from 'mobx';

class logisticsTrackState {
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
   	 console.log(JSON.stringify(this.container.queryParams));
   }
  

}



export default new logisticsTrackState();
