import React from 'react';
// import './App.css';
// import Child from './child'
// import CustomRef from './refDom'
import Home from './pages/home'
import Detail from './pages/detail'
import Propsdemo from './pages/propsdemo'
import {HashRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      val: '初始值'
    }
}

 render () {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          {/* <Link to="/Detail">Detail</Link> */}
          <NavLink activeStyle={{color: 'red'}} to="/Detail">Detail</NavLink>
        </li>
        <li>
          <Link to="/home/mine">Demo</Link>
        </li>
      </ul>

      <Switch>
        <Route exact strict path="/home" component={Home}></Route>
        <Route path="/detail" component={Detail}></Route>
        <Route path="/home/mine" render={ (props) => <Propsdemo {...props} title="标题测试下传参你"/>}></Route>
      </Switch>
    </div>
  </Router>
  )
 }

}

export default App
