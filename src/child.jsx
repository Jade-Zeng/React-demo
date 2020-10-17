import React from 'react'

export default class Child extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            count: 10
        }

    }
    clickAdd = () => {
        this.setState({
            count: this.state.count+1
        } )
    }

    clickDes = () => {
        this.setState({
            count: this.state.count-1
        } )
    }

    changePerant = () => {
        this.props.changeVal()
    }

    render () {
        return (
        <div>
            <div>c测试{ this.state.count }</div>
            <button onClick={this.changePerant}>修改你爸爸的值看看</button>
            <button onClick={ this.clickAdd}>增加</button>
            <button onClick={ this.clickDes}>减少</button>
        </div>
        )
    }
}