import React, { Component } from 'react';

import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';

//CSS
import './Player.css';

const options = {
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
  },
  onAudioPlay(audioInfo) {
    console.log('audio playing', audioInfo);
  }
};
export default class PlayerTime extends Component {
  state = {
    params: options
  };

  render() {
    const { params } = this.state;
    return (
      <div>
        <div className="Status">
          <div className="StatusTitile">Playing</div>
          <div>Kill This Love - Blackpink</div>
        </div>
        <ReactJkMusicPlayer {...params} />
      </div>
    );
  }
}
