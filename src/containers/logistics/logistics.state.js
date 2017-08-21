import {observable, action} from 'mobx';

class Logistics {
    @observable container = {
        dada: null,//保存页面查询条件
        queryProduct:[]//产品列表
    }

    @action setQueryProduct(data){
        this.container.queryProduct= data;
    }
}

export default new Logistics();