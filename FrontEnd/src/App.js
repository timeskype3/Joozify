import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//CSS

import 'antd/dist/antd.css';

//Component
import Login from './component/Login';
import Main from './component/Main';
import SignUpForm from './component/SignUpForm';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/main" component={Main} />
          <Route path="/signupform" component={SignUpForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
