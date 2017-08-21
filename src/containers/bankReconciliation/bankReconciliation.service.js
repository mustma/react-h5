import axios from 'axios';
export default function postBank(data,cb, errorCb) {
	var path = window.location.protocol+"//{0}mhyq-kxtx.cn/mhyq";
	if(window.location.origin.indexOf("test-")>-1){
		path = path.replace("{0}","test-");
	}else if(window.location.origin.indexOf("dev-")>-1){
		path = path.replace("{0}","dev-");
	}
	else if(window.location.origin.indexOf("uat-")>-1){
		path = path.replace("{0}","uat-");
	}
	else{
		path = path.replace("{0}","");
	}
    axios({
        method:'post',
        url: path+'/wallet/api/account/getBilllist',
        data:data
    }).then(function (res) {
        cb(res.data)
    }).catch(function (error) {
        errorCb(error)
    })
}