import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './Main.css';
import { Avatar, Icon } from 'antd';

export default class Main extends Component {
  render() {
    return (
      <div className="Background">
        <div className="Side">
          <div className="SideSearch"></div>
          <div className="Side-Account">
            <Avatar size={64} icon="user" />
            <h1>Joozify's Account</h1>
          </div>
          <div class="FixedHeightContainer">
            <div class="Categories">
              <h className="Titile-menu">YOUR LIBRARY </h>
              <Icon
                type="appstore"
                theme="filled"
                style={{ fontSize: '22px', color: '#8e8e93' }}
              />
              <div className="Titile-submenu">Made For You</div>
              <div className="Titile-submenu">Recently Playing</div>
              <div className="Titile-submenu">Liked Songs</div>
              <div className="Titile-submenu">Albums</div>
              <div className="Titile-submenu">Artists</div>
              <br />
              <h className="Titile-menu">PLAYLISTS</h>
              <br />
              Test1 Test1 Test1 Test1 Test1 Test1 Test1 Test1Test1 Test1 Test1
              Test1 Test1 Test1 Test1 Test1Test1 Test1 Test1 Test1 Test1 Test1
              Test1 Test1Test1 Test1 Test1 Test1 Test1 Test1 Test1 Test1Test1
              Test1 Test1 Test1 Test1 Test1 Test1 Test1Test1 Test1 Test1 Test1
              Test1 Test1 Test1 Test1Test1 Test1 Test1 Test1 Test1 Test1 Test1
              Test1Test1 Test1 Test1 Test1 Test1 Test1 Test1 Test1Test1 Test1
              Test1 Test1 Test1 Test1 Test1 Test1Test1 Test1 Test1 Test1 Test1
              Test1 Test1 Test1Test1 Test1 Test1 Test1 Test1 Test1 Test1 Test1
            </div>
          </div>
        </div>
        <div className="Status" />
        <div className="Nav" />
        <div className="Divider" />
      </div>
    );
  }
}
