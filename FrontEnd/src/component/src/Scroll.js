import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//CSS
import './assets/css/normalize.css';
import './assets/css/carousel.css';
import './assets/css/styles.css';

//COMPONENTS

import Homepage from './assets/components/Homepage';
import Movie from './assets/components/Movie';

class Scroll extends React.Component {
  render() {
    return (
      <Router>
        <div className="main">
          <div className="container">
            <Route path="/" component={Homepage} />
            <Route path="/music/:movieId" component={Movie} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Scroll;
