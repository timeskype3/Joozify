/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import { Upload, message, Button, Icon, Form } from 'antd';
import firebase from '../firebase';

const { storage } = firebase;

// export default function UploadForm() {

//   function

//   return <div>SeiA</div>;
// }

export default class UploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storageRefs: {},
      file: {},
      filename: ''
    };
  }

  // componentDidMount() {
  //   return this.setState(prevState => {
  //     return {
  //       ...prevState,
  //       storageRefs: storage
  //     };
  //   });
  // }
  // onUpload = () => {
  //   const file =
  // }

  onUploadChange = e => {
    // console.log('upload change', e.target);
    const file = e.target.files[0];
    const filename = file.name;
    console.log('before append', file);
    if (file) {
      return this.setState(prevState => {
        const data = new FormData();
        data.append(filename, file);
        console.log('after append', data);
        return {
          ...prevState,
          file,
          filename
        };
      });
    }
  };

  onUpload = () => {
    console.log(this.state);
    const { file, filename } = this.state;

    storage
      .ref(`image/${filename}`)
      .put(file)
      .then(snapshots => {
        console.log('file uploaded', snapshots);
      })
      .catch(err => {
        console.error('firebase err', err);
      });
  };

  render() {
    console.log('upload state', this.state);
    return (
      <div>
        <input onChange={this.onUploadChange} type="file" />
        <button onClick={this.onUpload}>Upload</button>
      </div>
    );
  }
}
