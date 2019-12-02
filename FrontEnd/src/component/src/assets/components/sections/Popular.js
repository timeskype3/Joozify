import React from 'react';
import Grid from './Grid';

class Popular extends React.Component {
  render() {
    return (
      <div className="sections popular">
        <p className="title">Popular on Joozify</p>
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

export default Popular;
