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
    function Login() {
      const navStyle = {
        color: 'white'
      };
      return (
        <div>
          <div className="Ellipse" />
          <p>Joozify.</p>
          <p>A millions song that on your hand</p>
          <Link style={navStyle} to="/loginform">
            <button onClick={this.onBtnLogin} className="Login-button">
              Log in
            </button>
          </Link>

          <Modal
            title="Login"
            visible={this.state.showModal}
            onCancel={this.onClose}
            footer={() => null}
          >
            <LoginForm />
          </Modal>

          <br />
          <button className="Facebook-button">Log in via facebook</button>
          <div>
            <Button type="link">Sign Up</Button>
          </div>
        </div>
      );
    }
  }
}
