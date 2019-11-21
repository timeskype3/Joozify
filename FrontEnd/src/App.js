import React from 'react';
import 'antd/dist/antd.css';
import Login from './component/Login';
import LoginForm from './component/LoginForm';
import LoginFB from './component/LoginFB';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/LoginFB" component={LoginFB} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
