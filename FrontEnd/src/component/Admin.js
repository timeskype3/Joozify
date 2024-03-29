import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Layout, Icon } from 'antd';
import Delete from './Delete';
import UploadForm from './Upload';
import ListUser from './ListUser';

const { Header, Footer, Content } = Layout;

export default class Admin extends Component {
  state = {
    showModal: false,
    showModal2: false,
    showModal3: false
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

  onBtnDelete = e => {
    this.setState(prevState => {
      let set = {
        ...prevState
      };
      set = { ...set, showModal2: true };
      return set;
    });
  };

  onBtnListUser = e => {
    this.setState(prevState => {
      let set = {
        ...prevState
      };
      set = { ...set, showModal3: true };
      return set;
    });
  };

  onClose = () => {
    return this.setState(prevState => {
      return {
        ...prevState,
        showModal: false,
        showModal2: false,
        showModal3: false
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
              <Link style={navStyle} onClick={this.onBtnListUser}>
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
              <Link style={navStyle} onClick={this.onBtnDelete}>
                <Icon
                  type="delete"
                  style={{ fontSize: '120px', color: '#8e8e93' }}
                />

                <div className="AdminPage">DELETE</div>
              </Link>
            </div>

            <Modal
              title="User"
              visible={this.state.showModal3}
              onCancel={this.onClose}
              footer={null}
              width="90%"
            >
              <ListUser />
            </Modal>

            <Modal
              title="Upload New Music"
              visible={this.state.showModal}
              onCancel={this.onClose}
              footer={null}
            >
              <UploadForm onSave={this.onClose} />
            </Modal>

            <Modal
              title="Delete music"
              visible={this.state.showModal2}
              onCancel={this.onClose}
              footer={null}
              width="90%"
            >
              <Delete />
            </Modal>
          </Content>
          <Footer />
        </Layout>
      </div>
    );
  }
}
