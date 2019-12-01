import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Layout, Icon } from 'antd';
import Upload from './Upload';

const { Header, Footer, Content } = Layout;

export default class Admin extends Component {
  state = {
    showModal: false,
    showModal2: false
  };

  onBtnUpload = e => {
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
            <h1 className="Logo LogoSize">Jooz</h1>
            <h1 className="Logo-2 LogoSize">i</h1>
            <h1 className="Logo LogoSize ">fy </h1>
          </Header>

          <Content>
            <div className="IconAdminPage">
              <Link style={navStyle} onClick={this.onBtnUpload}>
                <Icon
                  type="user"
                  style={{ fontSize: '120px', color: '#8e8e93' }}
             />

                <div className="AdminPage">USER</div>
              </Link>
            </div>

            <div className="IconAdminPage">
              <Link style={navStyle} onClick={this.onBtnUpload}>
                <Icon
                  type="to-top"
                  style={{ fontSize: '120px', color: '#8e8e93' }}
                />

                <div className="AdminPage">UPLOAD</div>
              </Link>
            </div>

            <div className="IconAdminPage">
              <Link style={navStyle} onClick={this.onBtnUpload}>
                <Icon
                  type="delete"
                  style={{ fontSize: '120px', color: '#8e8e93' }}
                />

                <div className="AdminPage">DELETE</div>
              </Link>
            </div>

            <Modal
              title="Upload New Music"
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
