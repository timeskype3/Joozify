import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Banner from './featured/Banner';
import firebase from '../../../../firebase/index';

const database = firebase.firestore;
const banners = database.collection('Banner');

class MovieCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: []
    };
  }
  componentDidMount() {
    banners.get().then(e => {
      e.forEach(b => {
        console.log(b.id, ' => ', b.data());
        this.setState(prevState => {
          return {
            ...prevState,
            banner: [...prevState.banner, b.data()]
          };
        });
      });
    });
  }
  render() {
    return (
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        interval={5000}
        transitionTime={700}
      >
        {Object.keys(this.state.banner)
          .reverse()
          .map(key => {
            return (
              <Banner key={key} details={this.state.banner[key]} index={key} />
            );
          })}
      </Carousel>
    );
  }
}

export default MovieCarousel;
