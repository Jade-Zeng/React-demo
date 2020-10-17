import React from 'react'
import { Button } from 'antd';

export default class CustomRef extends React.Component{
    render () {
        return (
        <div>
             <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="ghost">Ghost</Button>
            <Button type="dashed">Dashed</Button>
        </div>
        )
    }
}