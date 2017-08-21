import {observable, action} from 'mobx';

class ProductState {
    @observable container= {
        checked1: false,//switch 按钮选项
        checked2: false,
        startStationCode:[],//开始城市
        endStationCode: [],//结束城市
        startCity:'',
        endCity:''
    }

    //@observable formList= [];

    //设置fromText对值
    @action setProductFromText(num,text) {
        this.container.fromText[num]= text;
    }

    //反转fromText
    @action fromTextReverse() {
        var arr = this.container.startStationCode;
        this.container.startStationCode = this.container.endStationCode;
        this.container.endStationCode = arr;
    }



}

export default new ProductState();