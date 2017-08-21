import React from 'react';

import './header.scss';

export default class Header extends React.Component {
    render() {
        return (
            <div className="g-header">
                <h3>发现高效优质 好线路</h3>
                <p><span>点击此处</span>搜索更多>></p>
                <div className="u-go">
                    <div className="go"></div>
                </div>
                <div className="sz"></div>
            </div>
        )
    }
}