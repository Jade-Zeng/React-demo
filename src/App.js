import React from 'react';
// import './App.css';
// import Child from './child'
// import CustomRef from './refDom'
// import Home from './pages/home'
// import Detail from './pages/detail'
// import Propsdemo from './pages/propsdemo'
// import {HashRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import { connect } from 'react-redux'
// import { increment, decrement } from './actions/counter'
import * as actions from './actions/counter'
import { bindActionCreators} from 'redux'
import Consultation from './pages/scroll'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      val: '初始值'
    }
}

 render () {
  return (
    <div>
      <h1>测试:{this.props.counter}</h1>
      <button onClick={() => this.props.actions.increment(10)}>increment</button>
      <button onClick={() => this.props.actions.decrement(5)}>decrement</button>
      <Consultation></Consultation>
    </div>
  //   <Router>
  //   <div>
  //     <ul>
  //       <li>
  //         <Link to="/home">Home</Link>
  //       </li>
  //       <li>
  //         {/* <Link to="/Detail">Detail</Link> */}
  //         <NavLink activeStyle={{color: 'red'}} to="/Detail">Detail</NavLink>
  //       </li>
  //       <li>
  //         <Link to="/home/mine">Demo</Link>
  //       </li>
  //     </ul>

  //     <Switch>
  //       <Route exact strict path="/home" component={Home}></Route>
  //       <Route path="/detail" component={Detail}></Route>
  //       <Route path="/home/mine" render={ (props) => <Propsdemo {...props} title="标题测试下传参你"/>}></Route>
  //     </Switch>
  //   </div>
  // </Router>
  )
 }

}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
