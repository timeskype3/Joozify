import React from 'react';
import MusicCarousel from './Carousel';
import Sections from './sections/Sections';

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <MusicCarousel />
        <Sections />
      </div>
    );
  }
}

export default Homepage;
