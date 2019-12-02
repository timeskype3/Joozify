import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import firebase from './firebase/index';
//CSS
import 'antd/dist/antd.css';

//Component
import Login from './component/Login';
import Main from './component/Main';
import Admin from './component/Admin';

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
          // Data: user.get()
        });
      }
    });
  }

  componentDidUpdate() {
    //const currentData = this.state.Data;
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
    return (
      <React.Fragment>
        <Route path="/" exact component={Login} />
        <Route path="/main" component={Main} />
        <Route path="/admin" component={Admin} />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
