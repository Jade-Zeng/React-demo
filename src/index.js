import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import counter from './reducers/counter'
import { Provider } from 'react-redux'

const store = createStore(counter)

// store.subscribe(() => {console.log(store.getState())})
// const render = () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App onIncre={() => store.dispatch({type: 'incre'})}
//           onDecre={() => store.dispatch({type: 'decre'})}
//           value={store.getState()}/>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
  
// }
// render ()
// store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>, document.getElementById('root')
)