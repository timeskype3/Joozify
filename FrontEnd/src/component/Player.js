import React, { Component } from 'react';

import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import { Icon } from 'antd';
//CSS
import './Player.css';

let options = {
  extendsContent: [
    <div className="Logo PlayerLogoSize"> Jooz</div>,
    <div className="Logo-2 PlayerLogoSize">i</div>,
    <div className="Logo PlayerLogoSize">fy </div>
  ],
  audioLists: [
    {
      name: 'Bedtime Stories',
      singer: 'Jay Chou',
      cover:
        'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg',
      musicSrc:
        'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3'
    },
    {
      name: '难得',
      singer: '安来宁',
      cover: '//cdn.lijinke.cn/nande.jpg',
      musicSrc: '//cdn.lijinke.cn/nande.mp3'
    }
  ],
  playModeText: {
    order: 'order',
    orderLoop: 'orderLoop',
    singleLoop: 'singleLoop',
    shufflePlay: 'shufflePlay'
  },
  showDownload: false,

  theme: 'dark',
  showThemeSwitch: false,
  autoPlay: false,
  defaultVolume: 50,
  mode: 'full',
  glassBg: true,
  defaultPosition: {
    top: 300,
    right: 70
  }
};
class PlayerTime extends Component {
  constructor(props) {
    super(props);
    this.changestatusplay = this.changestatusplay.bind(this);
    this.changestatuspause = this.changestatuspause.bind(this);
  }
  state = {
    params: options,
    status: 'Pause',
    name: '',
    icon: 'pause'
  };
  onAddAudio = () => {
    const data = {
      ...this.state.params,
      audioLists: [
        ...this.state.params.audioLists,
        {
          name: "I'm new here",
          singer: 'jack',
          cover: 'http://www.lijinke.cn/music/1387583682387727.jpg',
          musicSrc: `http://www.lijinke.cn/music/${Date.now()}.mp3`
        }
      ]
    };
    this.setState({
      params: data
    });
  };

  changestatusplay(audioInfo) {
    this.setState({
      name: audioInfo.name,
      status: 'Playing',
      icon: 'customer-service'
    });
  }

  changestatuspause(audioInfo) {
    this.setState({ status: 'Pause', icon: 'pause' });
  }

  render() {
    const { params } = this.state;
    return (
      <div>
        <div className="Status">
          <div className="StatusTitile">{this.state.status}</div>
          <Icon
            type={this.state.icon}
            style={{ color: '#ff9500', fontSize: '20px' }}
          />
          <div className="audioname">
            <marquee scrollamount="3">{this.state.name}</marquee>
          </div>
        </div>
        <ReactJkMusicPlayer
          {...params}
          onAudioPlay={this.changestatusplay}
          onAudioPause={this.changestatuspause}
        />
      </div>
    );
  }
}

export default PlayerTime;
