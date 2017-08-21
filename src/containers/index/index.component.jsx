import React from 'react';

import { observer } from 'mobx-react';

import indexState from './index.state';
import './index.scss';

import axios from 'axios';

@observer
class Index extends React.Component {
    componentWillMount(){
        // axios.get('/loca/jj').then(function (data) {
        //     console.log(data)
        // })
    }
    render(){
        return (
            <div className="page index">
                <div className="btn" onClick={()=>{indexState.statGame()}}></div>
                <div className={indexState.container.boxState?'ruleWrap show':'ruleWrap'}>
                    <div className="rule">
                        <img className="title" src={require('./img/title.png')} />
                        <div className="text">{indexState.container.ruleText}</div>
                        <div className="btn" onClick={()=>{indexState.goHome()}}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index