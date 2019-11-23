import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './Main.css';

function Main() {
  return (
    <div className="Background">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <div className="Side">
        <div className="SideSearch">
          <div className="searchBox">
            <input
              className="searchInput"
              type="text"
              name=""
              placeholder="Search"
            />
            <button className="searchButton" href="#">
              <i className="material-icons">search</i>
            </button>
          </div>
        </div>
        <div class="FixedHeightContainer">
          <div class="Categories">
            blah... ..blah blah blah... ..blah blah blah... ..blah blah blah...
            ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah
            blah blah... ..blah blah blah... ..blah blah blah... ..blah blah
            blah... ..blah blah blah... ..blah blah blah... ..blah blah blah...
            ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah
            blah blah... ..blah blah blah... ..blah blah blah... ..blah blah
            blah... ..blah blah blah... ..blah blah blah... ..blah blah blah...
            ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah
            blah blah... ..blah blah blah... ..blah blah blah... ..blah blah
            blah... ..blah blah blah... ..blah blah blah... ..blah blah blah...
            ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah
            blah blah... ..blah blah blah... ..blah blah blah... ..blah blah
            blah... ..blah blah blah... ..blah blah blah... ..blah blah blah...
            ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah
            blah blah... ..blah blah blah... ..blah blah blah... ..blah blah
            blah... ..blah blah blah... ..blah blah blah... ..blah blah blah...
            ..blah blah blah... ..blah blah blah...
          </div>
        </div>
      </div>
      <div className="Side-Account">Account Profile</div>
      <div className="Status" />
      <div className="Nav" />
      <div className="Divider" />
    </div>
  );
}

export default Main;
