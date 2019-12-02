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
      name: 'Feel Special',
      singer: 'Twice',
      cover:
        'https://firebasestorage.googleapis.com/v0/b/joozify.appspot.com/o/ImageURL%2FK-pop%2FTWICE%20-%20Feel%20Special(New%20Release).jpg?alt=media&token=bfebc5d1-6515-421d-afdb-967a497cfdff',
      musicSrc:
        'https://firebasestorage.googleapis.com/v0/b/joozify.appspot.com/o/MusicURL%2FFeel%20Special.mp3?alt=media&token=0ffff46e-a750-4d65-859e-910a48f88dbb'
    },
    {
      name: 'I Forgot That You Existed',
      singer: 'Taylor Swift',
      cover:
        'https://firebasestorage.googleapis.com/v0/b/joozify.appspot.com/o/ImageURL%2FInter%2FTaylor%20Swift%20-%20Lover.jpg?alt=media&token=16d0a451-73fd-4656-9ae7-5dc1cb1b29ae',
      musicSrc: `https://firebasestorage.googleapis.com/v0/b/joozify.appspot.com/o/MusicURL%2FTaylor%20Swift%20-%20I%20Forgot%20That%20You%20Existed.mp3?alt=media&token=4298c206-46fd-4c7f-8280-618d010f6e27`
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
    this.onAddAudio = this.onAddAudio.bind(this);
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
          name: 'I Forgot That You Existed',
          singer: 'Taylor Swift',
          cover:
            'https://firebasestorage.googleapis.com/v0/b/joozify.appspot.com/o/ImageURL%2FInter%2FTaylor%20Swift%20-%20Lover.jpg?alt=media&token=16d0a451-73fd-4656-9ae7-5dc1cb1b29ae',
          musicSrc: `https://firebasestorage.googleapis.com/v0/b/joozify.appspot.com/o/MusicURL%2FTaylor%20Swift%20-%20I%20Forgot%20That%20You%20Existed.mp3?alt=media&token=4298c206-46fd-4c7f-8280-618d010f6e27`
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
