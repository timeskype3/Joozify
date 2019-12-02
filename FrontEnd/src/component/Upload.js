/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import { Button, Form, Input, DatePicker, Icon, Spin } from 'antd';
import firebase from '../firebase';

const { storage, firestore } = firebase;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
const database = firestore.collection('Music');

export default class UploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storageRefs: {},
      file: {},
      filename: '',
      fileMusic: null,
      download: '',
      finish: false,
      forms: {
        Artist: '',
        Album: '',
        Genre: '',
        Title: '',
        UrlImage: '',
        UrlMusic: '',
        Date: ''
      }
    };
  }

  onChangeDate = (date, dateString) => {
    return this.setState(prevState => {
      return {
        ...prevState,
        forms: {
          ...prevState.forms,
          Date: date.format('DD-MM-YYYY')
        }
      };
    });
  };

  onUploadImageChange = e => {
    this.setState(prevState => {
      return {
        ...prevState,
        finish: false
      };
    });
    const file = e.target.files[0];
    const filename = file.name;
    console.log('before append', file);
    if (file) {
      return this.setState(
        prevState => {
          const data = new FormData();
          data.append(filename, file);
          console.log('after append', data);
          return {
            ...prevState,
            file,
            filename
          };
        },
        () => this.onUploadImage()
      );
    }
  };

  onUploadMusicChange = e => {
    this.setState(prevState => {
      return {
        ...prevState,
        finish: false
      };
    });
    const fileMusic = e.target.files[0];
    const filenameMusic = fileMusic.name;
    console.log('before append', fileMusic);
    if (fileMusic) {
      return this.setState(
        prevState => {
          const data = new FormData();
          data.append(filenameMusic, fileMusic);
          console.log('after append', data);
          return {
            ...prevState,
            fileMusic,
            filenameMusic
          };
        },
        () => this.onUploadMusic()
      );
    }
  };

  onUploadImage = () => {
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
            finish: true,
            forms: {
              ...prevState.forms,
              UrlImage: download
            }
          };
        });
      })
      .catch(err => {
        console.error('firebase err', err);
      });
  };

  onUploadMusic = () => {
    console.log(this.state);
    const { fileMusic, filenameMusic } = this.state;

    storage
      .ref(`music/${filenameMusic}`)
      .put(fileMusic)
      .then(async snapshots => {
        console.log('file uploaded', snapshots);
        const download = await snapshots.ref.getDownloadURL();
        return this.setState(prevState => {
          return {
            ...prevState,
            finish: true,
            forms: {
              ...prevState.forms,
              UrlMusic: download
            }
          };
        });
      })
      .catch(err => {
        console.error('firebase err', err);
      });
  };

  onChange = e => {
    console.log(e.target.id, e.target.value);
    let input = {};
    input = {
      ...input,
      [e.target.id]: e.target.value
    };

    this.setState(prevState => {
      return {
        ...prevState,
        forms: { ...prevState.forms, ...input }
      };
    });
  };

  onSave = () => {
    database.add(this.state.forms).then(doc => {
      console.log('doc id', doc.id);
      return this.props.onSave();
    });
  };

  render() {
    console.log('upload state', this.state);

    return (
      <Form>
        <Form.Item label="Digital Album">
          <img src={this.state.download} />
          <Input onChange={this.onUploadImageChange} type="file" />
        </Form.Item>

        <Form.Item label="Title">
          <Input
            onChange={this.onChange}
            id="Title"
            style={{ width: '80%' }}
            required
          />
        </Form.Item>

        <Form.Item label="Artist">
          <Input
            onChange={this.onChange}
            id="Artist"
            style={{ width: '80%' }}
          />
        </Form.Item>

        <Form.Item label="Genre">
          <Input onChange={this.onChange} id="Genre" style={{ width: '80%' }} />
        </Form.Item>

        <Form.Item label="Album">
          <Input onChange={this.onChange} id="Album" style={{ width: '80%' }} />
        </Form.Item>

        <Form.Item label="Date Release">
          <DatePicker
            // onChange={this.onChange}
            id="Date"
            onChange={this.onChangeDate}
          />
        </Form.Item>

        <Form.Item label="FileMP3">
          <Input
            // onChange={this.onChange}
            onChange={this.onUploadMusicChange}
            type="file"
          />
        </Form.Item>

        {this.state.filename === '' && this.state.fileMusic === null ? (
          <Button type="primary" size="large">
            Save
          </Button>
        ) : !this.state.finish ? (
          <Spin indicator={antIcon} />
        ) : (
          <Button type="primary" size="large" onClick={this.onSave}>
            Save
          </Button>
        )}
      </Form>
    );
  }
}
