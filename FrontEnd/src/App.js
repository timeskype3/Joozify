import React from 'react';
import 'antd/dist/antd.css';
import Login from './component/Login';
import Main from './component/Main';
import LoginFB from './component/LoginFB';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <header className="App-header">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/loginfb" component={LoginFB} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
