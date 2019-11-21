import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

import './Login.css';
import { formatCountdown } from 'antd/lib/statistic/utils';

function Login() {
  const navStyle = {
    color: 'white'
  };

  return (
    <div>
      <div className="Ellipse" />
      <p>Joozify.</p>
      <p>A millions song that on your hand</p>
      <Link style={navStyle} to="/loginform">
        <button className="Login-button">Log in</button>
      </Link>
      <br />
      <button className="Facebook-button">Log in via facebook</button>
      <div>
        <Button type="link">Sign Up</Button>
      </div>
    </div>
  );
}

export default Login;
