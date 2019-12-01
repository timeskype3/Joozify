import React from 'react';
import { element } from 'prop-types';
import Recently from './Recently';
import Popular from './Popular';
import NewReleases from './NewReleases';
import Made from './Made';
import movies from '../../../movies';
import { moveBack, moveForward } from '../../../Helpers';

import firebase from '../../../../../firebase/index';

const database = firebase.firestore;
const music = database.collection('Music');

class Sections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies,
      yee: []
    };
  }

  // yee query
  componentDidMount() {
    console.log('section', music);
    music.get().then(e => {
      e.forEach(m => {
        console.log(m.id, ' => ', m.data());
        this.setState(prevState => {
          return {
            ...prevState,
            yee: [...prevState.yee, m.data()]
          };
        });
      });
    });
  }

  sendBack = p => {
    moveBack(p);
  };

  sendForward = p => {
    moveForward(p);
  };

  render() {
    console.log('section cur state', this.state);
    const recently = 'recently';
    const popular = 'popular';
    const newReleases = 'new-releases';
    const madeforyou = 'made-for-you';
    return (
      <div className="movie-container">
        <div className="movie-sections">
          <div className="section">
            <i
              className="fa fa-chevron-left back-arrow"
              onClick={e => this.sendBack(recently)}
            />
            <i
              className="fa fa-chevron-right forward-arrow"
              onClick={e => this.sendForward(recently)}
            />
            <Recently movies={this.state.movies} />
          </div>
          <div className="section">
            <i
              className="fa fa-chevron-left back-arrow"
              onClick={e => this.sendBack(popular)}
            />
            <i
              className="fa fa-chevron-right forward-arrow"
              onClick={e => this.sendForward(popular)}
            />
            <Popular movies={this.state.movies} />
          </div>
          <div className="section">
            <i
              className="fa fa-chevron-left back-arrow"
              onClick={e => this.sendBack(newReleases)}
            />
            <i
              className="fa fa-chevron-right forward-arrow"
              onClick={e => this.sendForward(newReleases)}
            />
            <NewReleases movies={this.state.movies} />
          </div>
          <div className="section">
            <i
              className="fa fa-chevron-left back-arrow"
              onClick={e => this.sendBack(madeforyou)}
            />
            <i
              className="fa fa-chevron-right forward-arrow"
              onClick={e => this.sendForward(madeforyou)}
            />
            <Made movies={this.state.movies} />
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default Sections;
