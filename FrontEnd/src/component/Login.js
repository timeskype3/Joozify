import React, { Component } from 'react';
import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

import './Login.css';
import LoginForm from './LoginForm';

export default class Login extends Component {
  state = {
    showModal: false
  };

  onBtnLogin = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        showModal: true
      };
    });
  };

  onClose = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        showModal: false
      };
    });
  };

  render() {
    const navStyle = {
      color: 'white'
    };
    return (
      <div className="Login">
        <div className="Ellipse" />
        <div className="Titile">
          <h1 className="Logo">Jooz</h1>
          <h1 className="Logo-2">i</h1>
          <h1 className="Logo">fy. </h1>
          <h2>A millions songs </h2>
          <h3>that on your hand</h3>
        </div>
        <button onClick={this.onBtnLogin} className="Login-button">
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

        <br />
        <Link style={navStyle} to="/loginfb">
          <button className="Facebook-button">Log in via facebook</button>
        </Link>
        <div>
          <Link style={navStyle} to="/main">
            <Button type="link">Sign Up</Button>
          </Link>
        </div>
      </div>
    );
  }
}
