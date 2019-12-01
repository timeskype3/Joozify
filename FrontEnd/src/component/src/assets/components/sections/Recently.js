import React from 'react';
import Grid from './Grid';

class Recently extends React.Component {
  render() {
    return (
      <div className="sections recently">
        <p className="title">Recently played</p>
        <div className="grid">
          {Object.keys(this.props.audio).map(key => {
            return <Grid key={key} audio={this.props.audio[key]} index={key} />;
          })}
        </div>
      </div>
    );
  }
}

export default Recently;
