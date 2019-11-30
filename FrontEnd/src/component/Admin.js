import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Layout, Icon, Button } from 'antd';
import Upload from './Upload';
import { FaBeer } from 'react-icons/fa';

const { Header, Footer, Sider, Content } = Layout;

export default class Admin extends Component {
  state = {
    showModal: false,
    showModal2: false
  };

  onBtnUpload = e => {
    const id = e.target.id;
    this.setState(prevState => {
      let set = {
        ...prevState
      };
      set = { ...set, showModal: true };
      return set;
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
      <div>
        <Layout>
          <Header>
            <h1 className="Logo">Jooz</h1>
            <h1 className="Logo-2">i</h1>
            <h1 className="Logo">fy </h1>
          </Header>
          <Content>
            <Icon type="user" style={{ fontSize: '120px', color: '#8e8e93' }} />

            <Link style={navStyle} onClick={this.onBtnUpload}>
              <br />
              <h1 className="Adminp">US</h1>
              <h1 className="Adminp2">E</h1>
              <h1 className="Adminp">R </h1>
            </Link>

            <Icon
              type="to-top"
              style={{ fontSize: '120px', color: '#8e8e93' }}
            />

            <Link style={navStyle} onClick={this.onBtnUpload}>
              <br />
              <h1 className="Adminp">UPL</h1>
              <h1 className="Adminp2">O</h1>
              <h1 className="Adminp">AD </h1>
            </Link>
            <Icon
              type="delete"
              style={{ fontSize: '120px', color: '#8e8e93' }}
            />
            <Link style={navStyle} onClick={this.onBtnUpload}>
              <br />
              <h1 className="Adminp">DEL</h1>
              <h1 className="Adminp2">E</h1>
              <h1 className="Adminp">TE</h1>
            </Link>

            <Modal
              title="Log In"
              visible={this.state.showModal}
              onCancel={this.onClose}
              footer={null}
            >
              <Upload />
            </Modal>
          </Content>
          <Footer></Footer>
        </Layout>
      </div>
    );
  }
}
