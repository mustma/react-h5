import React from 'react';
import { observer } from 'mobx-react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import './checkPiece.scss';
import Comment from './component/Comment.component';
import NoData from './component/NoData.component';

const TabPane = Tabs.TabPane;
@observer class CheckPiece extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [
                {
                    companyname: '成都吉祥家具有限公司',
                    time: '2017-05-06',
                    number: '112123134452327896321',
                    typeName: '电脑'
                },
                {
                    companyname: '张三',
                    time: '2017-05-06',
                    number: '112123134452327896321',
                    typeName: '苹果'
                },
                {
                    companyname: '成都吉祥家具有限公司',
                    time: '2017-05-06',
                    number: '112123134452327896321',
                    typeName: '电脑'
                },
                {
                    companyname: '上海绿源物流',
                    time: '2017-05-06',
                    number: '112123134452327896321',
                    typeName: '3C电子产品'
                },
                {
                    companyname: '张三',
                    time: '2017-05-06',
                    number: '112123134452327896321',
                    typeName: '苹果'
                },
                {
                    companyname: '成都吉祥家具有限公司',
                    time: '2017-05-06',
                    number: '112123134452327896321',
                    typeName: '电脑'
                },
                {
                    companyname: '上海绿源物流',
                    time: '2017-05-06',
                    number: '112123134452327896321',
                    typeName: '3C电子产品'
                }
            ],
            itemList2: [
                {
                    companyname: '上海卡行天下',
                    time: '2017-05-06',
                    number: '112123134452327896321',
                    typeName: '电脑'
                },
                {
                    companyname: '上海卡行天下',
                    time: '2017-05-06',
                    number: '112123134452327896321',
                    typeName: '电脑'
                },
                {
                    companyname: '上海卡行天下',
                    time: '2017-05-06',
                    number: '112123134452327896321',
                    typeName: '电脑'
                },
                {
                    companyname: '上海卡行天下',
                    time: '2017-05-06',
                    number: '112123134452327896321',
                    typeName: '电脑'
                }
            ]
        }
    }

    callback() {
        console.log('更改');
    }

    handleTabClick() {
        console.log('切换')
    }

    render() {
        return (
            <div className="page-checkpiece">
                <Tabs defaultActiveKey="1" onChange={this.callback} animated={false} onTabClick={this.handleTabClick}
                      tabBarPosition="top" swipeable="false">
                    <TabPane tab="待收件" key="1">
                        <div className="comments">
                            {
                                this.state.itemList2 && this.state.itemList2.length > 0 ? this.state.itemList2.map(function (item, index) {
                                    return (<Comment commentInfo={item}></Comment>)
                                })
                                    : <NoData />
                            }
                        </div>
                    </TabPane>
                    <TabPane tab="已发件" key="2">
                        <div className="comments">
                            {
                                this.state.itemList0 && this.state.itemList0.length > 0 ? this.state.itemList0.map(function (item, index) {
                                    return (<Comment commentInfo={item}></Comment>)
                                })
                                    : <NoData />
                            }
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default CheckPiece;