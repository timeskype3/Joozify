import React, { Component } from 'react';
import firebase from '../firebase/index';

const database = firebase.firestore;
const song = database.collection('Music');
export default class Delete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songname: ''
    };
  }
  onChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };
  //   onSubmit = e => {
  //     e.preventDefault();
  //     song
  //       .doc(songname)
  //       .delete()
  //       .then(function() {
  //         console.log('Document successfully deleted!');
  //       })
  //       .catch(function(error) {
  //         console.error('Error removing document: ', error);
  //       });
  //   };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="field">
          <label className="label"> Music name </label>
          <div className="control">
            <input className="input" name="songname" onChange={this.onChange} />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-danger"> Delete </button>
          </div>
        </div>
      </form>
    );
  }
}
