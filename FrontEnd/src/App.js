import React from 'react';
import 'antd/dist/antd.css';
import Login from './component/Login';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Joozify. A millions song that on your hand</p>
          <Login />
        </header>
      </div>
    );
  }
}
