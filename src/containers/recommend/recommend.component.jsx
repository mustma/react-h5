import React from 'react';
import Header from './components/header/Header';
import HttpContent from './subpage/HttpConent';

import './recommend.scss';
export default class Recommend extends React.Component {
    render(){
        return(
            <div className="g-recommend-wrap">
                <Header />
                <HttpContent />
            </div>
        )
    }
}