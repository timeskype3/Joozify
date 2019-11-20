import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, Link, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Router path="/" component={App} />
    <Router path="/register" component={} />
  </Router>,
  document.getElementById('root')
);
