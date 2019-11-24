import React, { Component } from 'react';
import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import './Login.css';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import firebase from '../firebase';

const fbProvider = firebase.FacebookAuthProvider;
const auth = firebase.auth;

export default class Login extends Component {
  state = {
    showModal: false,
    showModal2: false
  };

  onBtnLogin = e => {
    const id = e.target.id;
    this.setState(prevState => {
      let set = {
        ...prevState
      };
      if (id === '1') {
        set = { ...set, showModal: true };
      } else if (id === '2') {
        set = { ...set, showModal2: true };
      }

      return set;
    });
  };

  onClose = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        showModal: false,
        showModal2: false
      };
    });
  };

  onFBClick = () => {
    auth()
      .signInWithPopup(fbProvider)
      .then(d => {
        console.log('fb user', d.user);
        console.log('fb user', d.user.email);
      });
  };

  render() {
    const navStyle = {
      color: 'white'
    };

    return (
      <div className="Login">
        <div className="Titile">
          <h className="Logo">Jooz</h>
          <h className="Logo-2">i</h>
          <h className="Logo">fy. </h>
          <h2>A millions songs </h2>
          <h3>that on your hand</h3>
          <Link style={navStyle} to="/main">
            <Button type="link">Test Main</Button>
          </Link>
        </div>

        <Modal
          title="Log In"
          visible={this.state.showModal}
          onCancel={this.onClose}
          footer={() => null}
        >
          <LoginForm />
        </Modal>

        <Modal
          title="Sign Up"
          visible={this.state.showModal2}
          onCancel={this.onClose}
          footer={() => null}
        >
          <SignUpForm />
        </Modal>

        <button
          id="1"
          onClick={this.onBtnLogin}
          className="Login-button"
          style={navStyle}
        >
          Sign In
        </button>
        <br />

        <button
          onClick={this.onFBClick}
          className="Facebook-button"
          style={navStyle}
        >
          Sign In via facebook
        </button>

        <br />
        <Button
          id="2"
          onClick={this.onBtnLogin}
          className="SignUp-button"
          type="link"
          style={{
            position: 'absolute',
            fontFamily: 'sf_pro_displayregular',
            fontSize: '18px',
            color: '#ffbe17',
            zindex: '2',
            bottom: '60px',
            marginLeft: '-100px'
          }}
        >
          Don't have an account?
        </Button>

        <div>
          <div className="Ellipse" />
          <div className="Rectangle" />
          <div className="Polygon" />
          <div className="Polygon-shadow" />
        </div>
      </div>
    );
  }
}
