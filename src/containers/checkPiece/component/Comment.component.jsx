import React from 'react';
import { observer } from 'mobx-react';
import './comment.scss';

@observer class CheckComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let commentInfo = this.props.commentInfo;
        return (
            <div>
                <div className="comment">
                    <div className="info-top">
                        <label className="info-label">{commentInfo.companyname}</label>
                        <em className="info-time">{commentInfo.time}</em>
                    </div>
                    <div className="info-center">
                        <label className="info-label">单号：</label>
                        <span className="info-text">{commentInfo.number}</span>
                    </div>
                    <div className="info-type">
                        <i className="check-icon"></i>
                        <span className="info-text">{commentInfo.typeName}</span>
                    </div>
                </div>
            </div>

        )
    }
}
export default CheckComponent;