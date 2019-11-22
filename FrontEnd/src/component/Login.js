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
        <div className="Ellipse" />
        <p>Joozify.</p>
        <p>A millions song that on your hand</p>

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
        <br />
        <button id="2" onClick={this.onBtnLogin} className="SignUp-button">
          SignUp
        </button>

        <div>
          <Link style={navStyle} to="/home">
            <Button type="link">Home</Button>
          </Link>
        </div>
      </div>
    );
  }
}
