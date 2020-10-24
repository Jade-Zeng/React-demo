import React from 'react'

const Detail = (props) => {
    const toHome = () => {
        console.log(props)
        props.history.push('/home')
    }
    return (
        <div>Detail页面展示8888
            <button onClick={toHome}>去home</button>
        </div>
    )
}

export default Detail