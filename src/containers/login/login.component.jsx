import React from 'react';
import Code from './subpage/Code';

import { observer } from 'mobx-react';
import loginState from './login.state.js';
import locall from '../../helpers/locallStorage';

import { List, InputItem,Button, WhiteSpace, Toast } from 'antd-mobile';
import  { postLogin } from './login.server';



import './login.scss'
@observer
class Login extends React.Component{
    constructor() {
        super();

        this.goRouter = this.goRouter.bind(this);

        this.state = {
            stateDisabled: false,
            phoneValue: '',
        }
    }
    
    getPhone(text) {
        this.setState({
            phoneValue: text
        })
        loginState.setPhone(text);
    }

    //修改登陆按钮状态
    getCode(text) {
        if(loginState.state.code == text && text !=''){
        //if(true){
            this.setState({
                stateDisabled: true,
            })
        }else {
            this.setState({
                stateDisabled: false,
            })
        }
    }

    componentDidMount() {
        console.log(this.props.location.query)
    }


    render() {
        return (
            <div className="login">
                <div>
                    <div>
                        <InputItem
                            type="phone"
                            ref="phoneName"
                            clear
                            value={this.state.phoneValue}
                            onChange={this.getPhone.bind(this)}
                            placeholder="请输入手机号"
                        >
                             {/*<img src={require("./img/phone.png")} alt=""/>*/}
                            手机号
                        </InputItem>
                        <InputItem
                            placeholder="请输入验证码"
                            onChange= {this.getCode.bind(this)}
                        >
                         {/*<img src={require("./img/phone.png")} alt=""/>*/}
                            验证码
                            <div className="get-code">
                                <Code></Code>
                            </div>
                        </InputItem>
                    </div>
                    {/*<div className="cal-code">*/}
                        {/*语音获取验证码*/}
                    {/*</div>*/}
                    <div className="login-btn-box">
                        <button className={"btn "+ (this.state.stateDisabled? "btn-state": "")}  type="primary" onClick={this.handleClick.bind(this)} >登录</button>
                    </div>
                </div>
                <p className="kf">客服电话：4001-816-816</p>
            </div>
        )
    }

    //登陆
    handleClick() {
        var self = this;
        // 从props中获取0penid 跳转地址
        //const openid = this.props.location.query.openid;
        //把openid 保存到locallStorage中
        //locall.setItem('openid', openid);
        const page = this.props.location.query.nextPage;
        const url = '/wechat/account/bindKxtx';
        const data = {
            loginType: 2,
            phoneNumber: loginState.state.telValue,
            openid: locall.getItem('openid'),
            checkCode: loginState.state.code
        }

        if(this.state.stateDisabled) {

            postLogin(url, data, function (data) {
                //console.log(data)
                if(data.code=='B1000') {
                    //跳转到钱包页面
                    self.goRouter(page);
                }else{
                    Toast.info(data.msg, 1.5);
                }

            },function (error) {
                console.log(error)
                Toast.info('验证码错误', 1.5);
            })
        }
    }

    //跳转路由
    goRouter(page) {
        //路由跳转判断
        const isHttp=/^[http]/;
        if(isHttp.test(page)){
            window.location.href = page;
        }else {
            window.appHistory.push(page)
        }

    }

}

export default Login;