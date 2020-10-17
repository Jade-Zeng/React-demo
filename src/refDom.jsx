import React from 'react'

export default class CustomRef extends React.Component{
    constructor () {
        super();
        // this.input = React.createRef()
        this.state = {
            inputVal: ''
        }
    }

    changeInput = (e) => {
        // console.log(this.input.current.value)
        console.log(e.target.value)
        this.setState({
            inputVal: e.target.value
        })
    }
    // 非受控组件 ref
    // 受控组件
    render () {
        return (
        <div>
            <input type='text' ref={this.input} onChange={this.changeInput}></input>
            <input type='text' value={this.state.inputVal} onChange={this.changeInput}></input>
        </div>
        )
    }
}