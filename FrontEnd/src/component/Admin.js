import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Layout, Icon, Button } from 'antd';
import UploadForm from './Upload';

const { Header, Footer, Sider, Content } = Layout;

export default class Admin extends Component {
  state = {
    showModal: false,
    showModal2: false
  };

  onBtnUpload = e => {
    const { id } = e.target;
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
            <Icon
              type="to-top"
              style={{ fontSize: '120px', color: '#8e8e93' }}
            />

            <Link style={navStyle} onClick={this.onBtnUpload}>
              UPLOAD
            </Link>

            <Modal
              title="Log In"
              visible={this.state.showModal}
              onCancel={this.onClose}
              footer={null}
            >
              <UploadForm />
            </Modal>
          </Content>
          <Footer />
        </Layout>
      </div>
    );
  }
}
