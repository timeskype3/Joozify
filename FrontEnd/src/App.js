import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Joozify เลือกเพลงนับล้านได้ด้วยปลายนิ้วมือคุณ
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go go power ranger
        </a>
        <button>
          Language
        </button>
        
        <button>
          เข้าสู่ระบบ
        </button>

        <button>
          เข้าสู่ระบบด้วย facebook
        </button>
        <button>
          สมัครใช้บริการ
        </button>
      </header>
    </div>
  );
}

export default App;
