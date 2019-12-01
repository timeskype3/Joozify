import React from 'react';
import { Link } from 'react-router-dom';

class Grid extends React.Component {
  render() {
    const {
      image,
      title,
      match,
      rating,
      duration,
      desc,
      stars,
      genre,
      userRating,
      poster
    } = this.props.details;
    const newTitle = title.replace(/[^A-Z0-9]/gi, '');

    const movieProps = {
      title,
      duration,
      userRating,
      desc,
      stars,
      genre,
      poster
    };
    // const {
    //   Album,
    //   Artist,
    //   Genre: [],
    //   Title,
    //   UrlImage,
    //   UrlMusic,
    //   Year
    // } = this.props.sound;

    return (
      <Link
        to={{
          pathname: `/main/music/${newTitle}`,
          state: { movieProps }
        }}
        className={`grid-item ${newTitle}`}
      >
        <div className="grid-overlay"></div>
        <div className="transform-me">
          <img src={image} alt={title} />
        </div>
        <div className="movie-details">
          <p className="grid-title">{title}</p>
          <p className="grid-sub">
            <span className="green">{match} Match</span>
            <span className="rate">{rating}</span>
            <span className="duration">{duration}</span>
          </p>
        </div>
      </Link>
    );
  }
}
export default Grid;
