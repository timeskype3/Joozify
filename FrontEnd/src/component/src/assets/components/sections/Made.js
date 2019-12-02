import React from 'react';
import Grid from './Grid';

class Made extends React.Component {
  render() {
    return (
      <div className="sections made-for-you">
        <p className="title">Made for you</p>
        <div className="grid">
          {Object.keys(this.props.music)
            .reverse()
            .map(key => {
              return (
                <Grid key={key} details={this.props.music[key]} index={key} />
              );
            })}
        </div>
      </div>
    );
  }
}

export default Made;
