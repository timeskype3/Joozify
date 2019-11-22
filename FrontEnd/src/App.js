import React from 'react';
import 'antd/dist/antd.css';
import Login from './component/Login';
import Main from './component/Main';
import LoginFB from './component/LoginFB';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import SignUpForm from './component/SignUpForm';

function App() {
  return (
    <Router>
      <div>
        <header className="App-header">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/loginfb" component={LoginFB} />
            <Route path="/signupform" component={SignUpForm} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
