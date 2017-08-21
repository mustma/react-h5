import React from 'react';
import { observer } from 'mobx-react';
import { List, InputItem,Button, WhiteSpace, Toast } from 'antd-mobile';


@observer
class descTable extends React.Component{
    constructor(props) {
        super(props);
      
    }
    
    getPhone(text) {
    
    }
    render() {
        return (
            <div className="desc-info">
                <div className='sub-title'>
                重量单价
                </div>
                <table>
                <tr className="th-header">
                <th>200-1000kg</th>
                 <th>1000-4000kg</th>
                   <th>4000kg以上</th>
                   </tr>
                   <tr>
                    <td>1.2元/kg</td> 
                    <td>1元/1kg</td>
                      <td>0.8元/kg</td>
                   </tr>
                </table>
                 <div className='sub-title'>
                体积单价
                </div>
                  <table>
                <tr className="th-header">
                <th>1-5m³</th>
                 <th>5-10m³</th>
                   <th>15m³</th>
                   </tr>
                   <tr>
                    <td>290</td> 
                    <td>280</td>
                      <td>270</td>
                   </tr>
                </table>
                  <div className='sub-title'>
              最低一票:<label>400</label>元
                </div>
            </div>
        )
    }
}
export default descTable;