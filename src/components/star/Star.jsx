import React from 'react';
import './star.scss';
// 父组件传值  参数名  score
class Star extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            star:[]
        }
        this.getStar = this.getStar.bind(this);
    }

    componentDidMount() {
        this.getStar();
    }

    getStar() {
        const score = this.props.score;
        const LENGTH = 5;
        const CLS_ON = "on";
        const CLS_OFF = "off";
        var result=[];
        for(var i=0; i < score; i++) {
            result.push(CLS_ON);
        }
        while (result.length < LENGTH) {
            result.push(CLS_OFF);
        }

        this.setState({
            star: result
        })

    }

    render() {
        const star = this.state.star;
        return (
            <div className="star-box">
                {
                    star.map((item,index) => {
                        return <span className={item} key={index}></span>
                    })
                }
            </div>
        )
    }
}

export default Star;