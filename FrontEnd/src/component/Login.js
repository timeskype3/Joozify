import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

import './Login.css';

function Login() {
  return (
    <div>
      <button className="Login-button">Log in</button>
      <br />
      <button className="Facebook-button">Log in via facebook</button>
      <div>
        <Button type="link">Sign Up</Button>
      </div>
    </div>
  );
}

export default Login;
