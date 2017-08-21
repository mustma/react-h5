import axios from '../../config/axios';


// class lobinAxios{
//     constructor() {
//         this.codeUrl = ''
//         this.login = ''
//     }
//
//     getCode(data,cb) {
//         axios.post(this.codeUrl,{})
//     }
// }
export function postLogin(url,data,cb, errorCb) {
    axios({
        method:'post',
        url: url,
        data: data,
    }).then(function (res) {
        cb(res.data)
    }).catch(function (error) {
        errorCb(error)
    })
}