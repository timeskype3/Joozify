import React from 'react';

class First extends React.Component {
  render() {
    const interstellar = {
      background: `url(${'https://firebasestorage.googleapis.com/v0/b/joozify.appspot.com/o/image%2FBlackpink.jpeg?alt=media&token=34657885-f432-4791-8eca-d15639ea09eb'})`
    };
    return (
      <div className="carousel-item">
        <div className="box-left"></div>
        <div className="movie-image" style={interstellar}></div>
        <div className="title-info">
          <h2>BLΛƆKPIИK</h2>
          <div className="Album">Kill This Love Album</div>

          <p className="overview">
            Kill This Love is the second Korean-language EP and third EP overall
            by South Korean girl group Blackpink, released on April 5, 2019, by
            YG Entertainment and Interscope Records. It is their first Korean
            material since the release of Square Up in June 2018, and their
            debut release with Interscope Records.
          </p>
          <div className="up-down">
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
            <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
          </div>
          <p className="overview">
            Member:
            <span className="hover"> Lisa</span>,
            <span className="hover"> Rosé</span>,
            <span className="hover"> Jennie</span>,
            <span className="hover"> Jisoo</span>
          </p>
          <p className="overview">
            Genre:
            <span className="hover"> K-pop</span>,
            <span className="hover"> EDM</span>,
            <span className="hover"> hip hop</span>,
            <span className="hover"> J-pop</span>
          </p>
          <p className="overview">
            Record label:
            <span className="hover"> YG Entertainment</span>
          </p>
        </div>
      </div>
    );
  }
}

export default First;
