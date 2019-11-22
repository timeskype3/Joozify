import React from 'react';
import 'antd/dist/antd.css';
import { Icon } from 'antd';
import './Player.css';

function Player() {
  return (
    <div className="Player">
      <div className="Control">
        <a href="javascript:void();">
          <Icon type="step-backward" theme="filled" />
        </a>
        <a href="javascript:void();">
          <Icon type="caret-right" theme="filled" />
        </a>
        <a href="javascript:void();">
          <Icon type="step-forward" theme="filled" />
        </a>
      </div>
      <div className="Progress">
        <div className="Bar">
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Player;
