import React from 'react'
import { Prompt } from 'react-router';

export default class Propsdemo extends React.Component{
    constructor (props) {
        super (props);
        this.state = {
            name: ''
        }
    }
    componentDidMount () {
        console.log(this.props)
    }

    goHome ()  {
        this.props.history.push('/home')
    }
    render () {
        return (
            <div>props测试
                <button onClick={this.goHome.bind(this)}>去home</button>
                <Prompt
                    when={!!this.state.name}
                    message="Are you sure you want to leave?"
                    />
                <input type='text' valu={this.state.name} onChange={(e) => this.setState({name: e.target.value})}></input>
            </div>
        )
    }
}