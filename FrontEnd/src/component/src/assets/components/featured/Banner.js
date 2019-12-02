import React from 'react';

class Banner extends React.Component {
  render() {
    const {
      Album,
      Genre: [],
      Member: [],
      Overview,
      Record,
      Title,
      UrlImage
    } = this.props.details;

    const Image = {
      background: `url(${UrlImage})`
    };

    return (
      <div className="carousel-item">
        <div className="box-left"></div>
        <div className="movie-image" style={Image}></div>
        <div className="title-info">
          <h2>{Title}</h2>
          <div className="Album">{Album}</div>

          <p className="overview">{Overview}</p>
          <div className="up-down">
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
            <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
          </div>
          <p className="overview">
            Artist:
            {Object.keys(this.props.details.Member).map(key => {
              return (
                <span className="hover">
                  {' '}
                  {this.props.details.Member[key]}{' '}
                </span>
              );
            })}
          </p>
          <p className="overview">
            Genre:
            {Object.keys(this.props.details.Genre).map(key => {
              return (
                <span className="hover"> {this.props.details.Genre[key]} </span>
              );
            })}
          </p>
          <p className="overview">
            Record label:
            <span className="hover"> {Record}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Banner;
