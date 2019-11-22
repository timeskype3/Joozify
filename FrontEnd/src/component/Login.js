import React, { Component } from 'react';
import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

import './Login.css';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

export default class Login extends Component {
  state = {
    showModal: false,
    showModal2: false
  };

  onBtnLogin = e => {
    const id = e.target.id;
    // console.log('id', id)

    this.setState(prevState => {
      let set = {
        ...prevState
      };
      if (id === '1') {
        set = { ...set, showModal: true };
      } else {
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

  render() {
    const navStyle = {
      color: 'white'
    };

    return (
      <div className="Login">
        <div className="Titile">
          <h1 className="Logo">Jooz</h1>
          <h1 className="Logo-2">i</h1>
          <h1 className="Logo">fy. </h1>
          <h2>A millions songs </h2>
          <h3>that on your hand</h3>
        </div>
        <button id="1" onClick={this.onBtnLogin} className="Login-button">
          Log in
        </button>

        <Modal
          title="Login"
          visible={this.state.showModal}
          onCancel={this.onClose}
          footer={() => null}
        >
          <LoginForm />
        </Modal>

        <Modal
          title="SignUp"
          visible={this.state.showModal2}
          onCancel={this.onClose}
          footer={() => null}
        >
          <SignUpForm />
        </Modal>

        <br />
        <Link style={navStyle} to="/loginfb">
          <button className="Facebook-button">Log in via facebook</button>
        </Link>

        <div>
          <Button
            id="2"
            onClick={this.onBtnLogin}
            className="SignUp-button"
            type="link"
          >
            SignUp
          </Button>
          <Link style={navStyle} to="/main">
            <Button type="link">Test Main</Button>
          </Link>
          <div className="Ellipse" />
          <div className="Rectangle" />
          <div className="Polygon" />
          <div className="Polygon-shadow" />
        </div>
      </div>
    );
  }
}
