import React from 'react';
import Grid from './Grid';

class NewReleases extends React.Component {
  render() {
    return (
      <div className="sections new-releases">
        <p className="title">New Releases</p>
        <div className="grid">
          {Object.keys(this.props.music).map(key => {
            return (
              <Grid key={key} details={this.props.music[key]} index={key} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default NewReleases;
