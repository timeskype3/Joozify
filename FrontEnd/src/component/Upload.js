/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import { Upload, message, Button, Icon, Form, Input, DatePicker } from 'antd';
import firebase from '../firebase';

const { storage } = firebase;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

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
      filename: '',
      download: '',
      finish: false
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

  onChangeDate(date, dateString) {
    console.log(date, dateString);
  };

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
      .then(async snapshots => {
        console.log('file uploaded', snapshots);
        const download = await snapshots.ref.getDownloadURL();
        return this.setState(prevState => {
          return {
            ...prevState,
            download,
            finish: true
          };
        });
      })
      .catch(err => {
        console.error('firebase err', err);
      });
  };

  onUploadMusic = () => {
    console.log(this.state);
    const { file, filename } = this.state;

    storage
      .ref(`music/${filename}`)
      .put(file)
      .then(async snapshots => {
        console.log('file uploaded', snapshots);
        const download = await snapshots.ref.getDownloadURL();
        return this.setState(prevState => {
          return {
            ...prevState,
            download,
            finish: true
          };
        });
      })
      .catch(err => {
        console.error('firebase err', err);
      });
  };

  render() {
    console.log('upload state', this.state);

    // if (this.state.finish) {
    //   // storage.ref(`image/${this.state.filename}`).getDownloadURL(url => {
    //   //   console.log('download url', url);
    //   // });
    // }

    return (
      <Form>
        {/* <span>{this.state.download}</span> */}
        <Form.Item label="Digital Album">
          <img src={this.state.download} />
          <Input onChange={this.onUploadChange} type="file" />
          <Button onClick={this.onUpload}>Upload</Button>
        </Form.Item>

        <Form.Item label="Title">
          <Input style={{ width: '80%' }} />
        </Form.Item>

        <Form.Item label="Artist">
          <Input style={{ width: '80%' }} />
        </Form.Item>

        <Form.Item label="Genre">
          <Input style={{ width: '80%' }} />
        </Form.Item>

        <Form.Item label="Album">
          <Input style={{ width: '80%' }} />
        </Form.Item>

        <Form.Item label="Date Release">
          <DatePicker onChange={this.onChangeDate} />
        </Form.Item>

        <Form.Item label="FileMP3">
          <Input onChange={this.onUploadChange} type="file" />
          {/* <Button onClick={this.onUploadMusic}>Upload</Button> */}
        </Form.Item>

        <Button type="primary" size="large" onClick={this.onUpload}>Upload</Button>
      </Form>
    );
  }
}
