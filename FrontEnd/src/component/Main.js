import React, { Component } from 'react';
import { Avatar, Icon, Input } from 'antd';

//CSS
import './src/assets/css/normalize.css';
import './src/assets/css/carousel.css';
import './src/assets/css/styles.css';
import 'antd/dist/antd.css';
import './Main.css';

import Scroll from './src/Scroll';
import firebase from '../firebase/index';
import Player from './Player';

const auth = firebase.auth();

const { Search } = Input;

export default class Main extends Component {
  logout = e => {
    e.preventDefault();
    auth.signOut().then(response => {
      this.setState({
        currentUser: null
      });
      window.location = '/';
    });
  };

  render() {
    const currentUser = firebase.auth().currentUser || {};
    // console.log('currentUser: ', currentUser.email);
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
    const icon = {
      fontSize: '26px',
      color: '#8e8e93'
    };
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
            <div className="Scroll">
              <Scroll />
            </div>
          </div>
        </div>

        <div className="Side">
          <div className="SideSearch">
            <Search
              placeholder="Search"
              onSearch={value => console.log(value)}
              style={{ width: 270 }}
            />
          </div>
          <div className="Side-Account">
            <Avatar
              size={64}
              src="https://firebasestorage.googleapis.com/v0/b/joozify.appspot.com/o/56806446_2882375458653630_6085617536265617408_o.jpg?alt=media&token=5c92ea8d-3cad-4a74-bded-d734924af846"
            />
            <h1>{currentUser.displayName}</h1>
            <h1>
              <Icon type="logout" style={icon} onClick={this.logout} />
            </h1>
          </div>
          <div className="FixedHeightContainer">
            <div className="Categories">
              <h1 className="Titile-menu">YOUR LIBRARY </h1>
              <Icon type="appstore" theme="filled" style={icon} />
              <div className="Titile-submenu">Made For You</div>
              <div className="Titile-submenu">Recently Playing</div>
              <div className="Titile-submenu">Liked Songs</div>
              <div className="Titile-submenu">Albums</div>
              <div className="Titile-submenu">Artists</div>
              <br />
              <h1 className="Titile-menu">PLAYLISTS</h1>
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
        <div>
          <Player />
        </div>
        <div className="Divider" />
        <div className="BackgroundLogo LogoMain">
          <div className="Logo "> Jooz</div>
          <div className="Logo-2 ">i</div>
          <div className="Logo ">fy </div>
        </div>
      </div>
    );
  }
}
