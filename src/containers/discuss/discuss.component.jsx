import React from 'react';

import { observer } from 'mobx-react';

import discussState from './discuss.state';
import './discuss.scss';

import axios from 'axios';

@observer
class Discuss extends React.Component {
    componentWillMount(){
        //console.log(axios)
    }
    render(){
        return (
            <div className="page discuss">

            </div>
        )
    }
}

export default Discuss;