import React from 'react'
import { observer } from 'mobx-react'

import './tabBar.scss'

@observer
class TabBar extends React.Component {
    constructor(props) {
        super(props)
    }
    getTabBarItem(children, container, selectedTabFn) {
        return children.map((item) => {
            return <div className='item' className={item.key == container.selectedTab ? 'item selected' : 'item'} onClick={()=>{selectedTabFn(item.key)}}>
                <i className="icon" style={{ 'background': 'url(' + item.icon + ') center center/contain no-repeat' }}><i></i></i>
                <span>{item.title}</span>
            </div>
        })
    }
    render() {
        const {tabBarConfig} = this.props
        const {selectedTabFn} = tabBarConfig
        const {container, children} = tabBarConfig.tabBarConfig
        
        
        return (
            <div className={container.hidden ? 'tabBar hidden' : 'tabBar'}>
                {this.getTabBarItem(children, container, selectedTabFn)}
            </div>
        )
    }
}

export default TabBar