import React from 'react';
import { Toast } from 'antd-mobile';

import { observer } from 'mobx-react';
import loginState from '../login.state';
//import axios from 'axios';
import { postLogin } from '../login.server'

@observer
class Code extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            timeText: '点击获取验证码',
            codeState: false
        }

        this.getCode = this.getCode.bind(this);
        this.postLogin = this.postLogin.bind(this);
    }

    //获取验证码
    getCode() {
        var regMobile = /^1[3|4|5|6|7|8|9][0-9]{1}[0-9]{8}$/;
        if(!regMobile.test(loginState.state.telValue)){
            Toast.info('请输入正确的手机号码!!!', 1.5);
        }else {
            this.refs.btnCode.setAttribute('disabled','disabled');
            this.setTime();
            this.postLogin();
        }
    }

    //发送请求
    postLogin() {
        let url = '/mdm/sendLoginVerifyCode';
        let data = {phone: loginState.state.telValue}
        postLogin(url,data,function (data) {
            console.log(data)
            loginState.state.code = data.data
        },function (error) {
            console.log(error)
        })

    }

    setTime() {
        var _this = this;
        var time = 10;
        var item = setInterval(()=>{
            this.setState({
                timeText: '倒计时'+(time),
                codeState: true
            });
            if(time <= 0) {
                time = 10;
                _this.setState({
                    timeText: '重新获取验证码',
                    codeState: false
                });
                clearInterval(item);
                this.refs.btnCode.removeAttribute('disabled')
            }
            time--;
        },1000)
    }

    render() {
        return (

                <button ref="btnCode" className={"code-btn " + (this.state.codeState? "code-btn-state" : '' ) } onClick={this.getCode}>{this.state.timeText}</button>

        )
    }
}

export default Code;