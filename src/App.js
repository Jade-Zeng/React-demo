import React from 'react';
// import './App.css';
import Child from './child'
import CustomRef from './refDom'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      val: '初始值'
    }

}

 changeVal = () => {
   this.setState({
     val: '修改后你爸爸的值'
   })
 }
 render () {
   const { val } = this.state
  return (
    <div>
      <div>测试--{val}</div>
      <Child changeVal={this.changeVal}></Child>
      <CustomRef/>
    </div>
  )
 }

}

export default App
