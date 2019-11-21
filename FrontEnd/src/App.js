import React from 'react';
import 'antd/dist/antd.css';
import Login from './component/Login';
import LoginForm from './component/LoginForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/loginform" component={LoginForm} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
