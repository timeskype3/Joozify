import React, { Component } from 'react';
import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';
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
    return (
      <div>
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
        <button className="Facebook-button">Log in via facebook</button>
        <div>
          <Button type="link">Sign Up</Button>
        </div>
      </div>
    );
  }
}
