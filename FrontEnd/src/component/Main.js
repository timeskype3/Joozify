import React from 'react';
import 'antd/dist/antd.css';
import { Icon } from 'antd';
import './Main.css';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function Main() {
  return (
    <Layout>
      <Sider>
        <div className="Status">Playing</div>
        <div className="Nav">
          <Icon type="home" style={{ fontSize: '42px' }} />
          <Icon type="play-square" />
          <Icon type="folder" />
        </div>
        <div className="Divider" />
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>
          <div className="Home" />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default Main;
