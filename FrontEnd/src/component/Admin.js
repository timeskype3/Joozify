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
          <br />
          <h1 className="Logo">Ad</h1>
          <h1 className="Logo-2">m</h1>
          <h1 className="Logo">in </h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Link style={navStyle} to="/">
            <Button type="link">back to login</Button>
          </Link>
        </div>

        <Modal
          title="Log In"
          visible={this.state.showModal}
          onCancel={this.onClose}
          footer={null}
        >
          <LoginForm />
        </Modal>

        <Modal
          title="Sign Up"
          visible={this.state.showModal2}
          onCancel={this.onClose}
          footer={null}
        >
          <SignUpForm />
        </Modal>

        <button
          id="1"
          onClick={this.onBtnLogin}
          className="Login-button"
          style={navStyle}
        >
          Upload song
        </button>
        <br />

        <button
          onClick={this.onFBClick}
          className="Facebook-button"
          style={navStyle}
        >
          Delete song
        </button>

        <br />

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
