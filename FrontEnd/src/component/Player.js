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
      name: 'my boy',
      singer: 'Billie Eilish',
      cover:
        'https://firebasestorage.googleapis.com/v0/b/joozify.appspot.com/o/filepond%2F2019-11-30_04-39-21?alt=media&token=b1f6d6a4-ebe3-4496-abe3-e905dc22d2ad',
      musicSrc:
        'https://firebasestorage.googleapis.com/v0/b/joozify.appspot.com/o/filepond%2Fmy%20boy.mp3?alt=media&token=9f66d00b-fd6d-4d42-8af6-931bbfbf3172'
      //   lyric
    },
    {
      name: 'Heart Shaker',
      singer: 'TWICE',
      cover:
        'https://firebasestorage.googleapis.com/v0/b/joozify.appspot.com/o/filepond%2F207b8d7853b259bc3d2c58c2a7eb9b38.jpg?alt=media&token=bc00763d-4c87-41d6-8797-bfffcc8445a3',
      musicSrc: () => {
        return Promise.resolve(
          'https://firebasestorage.googleapis.com/v0/b/joozify.appspot.com/o/filepond%2FTWICE%20_Heart%20Shaker_%20M_V.mp3?alt=media&token=2d74dfa8-76f5-44a8-ab5d-af25da33b5c3'
        );
      }
    },
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
        <button onClick={this.onAddAudio}>
          + add audio ({params.audioLists.length})
        </button>
      </div>
    );
  }
}

export default PlayerTime;
