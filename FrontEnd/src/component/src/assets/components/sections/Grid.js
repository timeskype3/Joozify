import React from 'react';
import { Link } from 'react-router-dom';

class Grid extends React.Component {
  render() {
    const {
      Album,
      Artist,
      Genre: [],
      Title,
      UrlImage,
      UrlMusic,
      Year
    } = this.props.audio;
    const newTitle = Title.replace(/[^A-Z0-9]/gi, '');

    const musicProps = {
      Album,
      Artist,
      Genre: [],
      Title,
      UrlImage,
      UrlMusic,
      Year
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
          state: { musicProps }
        }}
        className={`grid-item ${newTitle}`}
      >
        <div className="grid-overlay"></div>
        <div className="transform-me">
          <img src={UrlImage} alt={Title} />
        </div>
        <div className="movie-details">
          <p className="grid-title">{Title}</p>
          <p className="grid-sub">
            <span className="green">{Album} Match</span>
            <span className="rate">{Artist}</span>
            <span className="duration">{Year}</span>
          </p>
        </div>
      </Link>
    );
  }
}
export default Grid;
