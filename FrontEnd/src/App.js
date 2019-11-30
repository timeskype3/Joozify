import React, { Component } from 'react';
import { BrowserRouter as Switch, Route, withRouter } from 'react-router-dom';

import firebase from './firebase/index';
//CSS
import 'antd/dist/antd.css';

//Component
import Login from './component/Login';
import Main from './component/Main';
import Store from './component/Store';
import Admin from './component/Admin';
import Upload from './component/Upload';

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
      <React.Fragment>
        <Route path="/" exact component={Login} />
        <Route path="/main" component={Main} />
        <Route path="/store" component={Store} />
        <Route path="/admin" component={Admin} />
        <Route path="/upload" component={Upload} />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
