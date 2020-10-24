import React from 'react'

export default class ProxyDemo extends React.Component{
    constructor () {
        super();
        this.state = {
            data: []
    }
}
    componentDidMount () {
        fetch('/api/list').then(res => res.json()).then(data => {
            // console.log(data);
            this.setState({
                data: data
            })
        })
    }
    
    render () {
        const { data } = this.state
        return (
        <div>
            <div>
                {
                    data.length ? <ul>{data.map((el, i) => {
                    return <li key={i}>{el.name}{el.age}</li>
                    })}</ul> : '请求中......'
                }
            </div>
        </div>
        )
    }
}