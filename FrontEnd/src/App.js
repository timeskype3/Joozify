import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from 'react-router-dom';

import firebase from './firebase/index';
//CSS
import 'antd/dist/antd.css';

//Component
import Login from './component/Login';
import Main from './component/Main';
import SignUpForm from './component/SignUpForm';
import Store from './component/Store';

class App extends Component {
  state = {
    auth: false,
    isRedirected: false
  };
  constructor(props) {
    super(props);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          auth: firebase.auth().currentUser.email
        });
      }
    });
  }

  componentDidUpdate() {
    const currentUser = this.state.auth;
    console.log(currentUser);
    if (currentUser && !this.state.isRedirected) {
      console.log('redirect jaa');
      this.setState(
        prevState => {
          return {
            ...prevState,
            isRedirected: !prevState.isRedirected
          };
        },
        () => {
          this.props.history.push('/main');
        }
      );
    }
  }
  render() {
    // console.log(firebase.auth().currentUser);

    // function checkLogin() {
    // if (currentUser) {
    //   this.props.history.push('/main');
    // }
    // }
    // console.log('If Current user: ', currentUser);
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/main" exact component={Main} />
        <Route path="/signupform" exact component={SignUpForm} />
        <Route path="/store" exact component={Store} />
      </Switch>
    );
  }
}

export default withRouter(App);
