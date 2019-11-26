import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from './firebase/index';
//CSS
import 'antd/dist/antd.css';

//Component
import Login from './component/Login';
import Main from './component/Main';
import SignUpForm from './component/SignUpForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          currentUser: firebase.auth().currentUser
        });
      }
    });
  }
  render() {
    const currentUser = this.state;
    if (currentUser) {
      // console.log('If Current user: ', currentUser);
      return (
        <Router>
          <div>
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/main" component={Main} />
              <Route path="/signupform" component={SignUpForm} />
            </Switch>
          </div>
        </Router>
      );
    } else {
      // console.log('Else Current user: ', currentUser);
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
  }
}
