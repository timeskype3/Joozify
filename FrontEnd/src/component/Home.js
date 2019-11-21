import React from 'react';
import 'antd/dist/antd.css';
import { Icon } from 'antd';

import { BrowserRouter as Router } from 'react-router-dom';

import './Home.css';

function Home() {
  return (
    <Router>
      <div className="Home">
        <div className="Status">Playing</div>
        <div className="Nav">
          <Icon type="home" style={{ fontSize: '42px' }} />
          <Icon type="play-square" />
          <Icon type="folder" />
        </div>
        <div className="Divider" />
      </div>
    </Router>
  );
}

export default Home;
