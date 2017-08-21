import React from 'react';
import Conttent from '../components/content/Content';

import './style.scss';

export default class HttpConent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    title: '物流公司1',
                    tj: 'a',
                    star: 3,
                    jiaoyi: 599,
                    time: 40,
                    monery: 555
                },
                {
                    title: '物流公司2',
                    tj: 'b',
                    star: 5,
                    jiaoyi: 54399,
                    time: 40,
                    monery: 555
                },
                {
                    title: '物流公司3',
                    tj: 'c',
                    star: 0,
                    jiaoyi: 345345,
                    time: 40,
                    monery: 555
                },
                {
                    title: '物流公司4',
                    tj: '',
                    star: 1,
                    jiaoyi: 345345,
                    time: 40,
                    monery: 555
                }
            ]
        }
    }

    componentDidMount() {
        //此处请求
    }

    render() {
        var data = this.state.data
        return (
            <ul className="recommend-content">
                {/*<Conttent data={this.state.data} />*/}
                {
                    data.map((item, index) => {
                        return (
                            <li key={index}>
                                <Conttent data={item}/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}