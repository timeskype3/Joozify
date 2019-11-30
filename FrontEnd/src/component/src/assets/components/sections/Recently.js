import React from 'react';
import Grid from './Grid';

class Recently extends React.Component {
  render() {
    return (
      <div className="sections recently">
        <p className="title">Recently played</p>
        <div className="grid">
          {Object.keys(this.props.movies).map(key => {
            return (
              <Grid key={key} details={this.props.movies[key]} index={key} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Recently;
