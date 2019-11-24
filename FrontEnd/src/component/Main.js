import React, { Component } from 'react';
import { Avatar, Icon } from 'antd';

//CSS
import './src/assets/css/normalize.css';
import './src/assets/css/carousel.css';
import './src/assets/css/styles.css';
import 'antd/dist/antd.css';
import './Main.css';

import Scroll from './src/Scroll';

export default class Main extends Component {
  render() {
    const elements = [
      'Software Engineering',
      'Operating Systems',
      'Signal&Linear Systems',
      'Economy',
      'Beauty of life',
      'Prof issue',
      'Quantum programming',
      'Big Data'
    ];

    const playlists = [];

    for (const [index, value] of elements.entries()) {
      playlists.push(
        <div key={index}>
          {index + 1}. {value}
        </div>
      );
    }
    return (
      <div className="Background">
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <div className="Content">
          <div className="FixedHeightScrollContainer">
            <div class="Scroll">
              <Scroll />
            </div>
          </div>
        </div>
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
              <div className="Titile-submenu">{playlists}</div>
            </div>
            <div
              style={{
                position: 'relative',
                color: '#8e8e93',
                fontFamily: 'sf_pro_displayregular',
                zIndex: '1',
                cursor: 'pointer',
                display: 'inline',
                left: '70px',
                top: '30px'
              }}
            >
              <Icon
                type="plus-circle"
                theme="filled"
                style={{
                  fontSize: '22px',
                  marginRight: '10px'
                }}
              />
              <div
                style={{
                  fontSize: '24px',
                  zIndex: '1',
                  display: 'inline'
                }}
              >
                New Playlist
              </div>
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
