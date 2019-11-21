import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import Login from './component/LoginForm.js';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Login />, document.getElementById('root'));

serviceWorker.unregister();
