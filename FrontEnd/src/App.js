import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import Login from './component/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Joozify. A millions song that on your hand</p>
        <Login />
      </header>
    </div>
  );
}

export default App;
