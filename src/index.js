import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import Store from './Store'
import history from './history'
import { Router } from 'react-router-dom'


ReactDOM.render(
  <Provider store={Store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
