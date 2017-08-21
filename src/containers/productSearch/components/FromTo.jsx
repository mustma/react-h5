import React from 'react';
import { observer } from 'mobx-react';
import productState from '../productSearch.state';
import './components.scss';

@observer
class FromTo extends React.Component {
    render() {
        return (
            <div className='form-active'>
                {
                    this.props.isUrl == 1 ?
                        <img src={require('../img/from.png')} alt=""/> :
                        <img src={require('../img/to.png')} alt=""/>
                }
                <input data-index={this.props.isUrl} type="text" placeholder={this.props.placeholderText}
                       onChange={this.handleChange.bind(this)}
                       value={this.props.text}/>
            </div>
        )
    }

    handleChange(e) {
        var value = e.target.value;
        if(e.target.getAttribute('data-index')==1) {
            productState.setProductFromText(0,value);
        }else {
            productState.setProductFromText(1,value);
        }
    }
}

export default FromTo;
