import React from 'react';
import { observer } from 'mobx-react';
import './comment.scss';

@observer class NodataComponent extends React.Component {
    render() {
        return (
            <div className="comment-nodata">
                <img src={require('../img/null.png')} alt=""/>
                <span className="nodata-text">无代收货物<br />您可以邀请发货人体验卡行服务</span>
            </div>
        )
    }
}
export default NodataComponent;