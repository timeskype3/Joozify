import React, { Component } from 'react';
import './Store.css';
import firebase from '../firebase/index';
import 'bulma/css/bulma.css';
import { FilePond, File, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
registerPlugin(FilePondImagePreview);

const storage = firebase.storage();

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [], //ใช้เก็บข้อมูล File ที่ Upload
      uploadValue: 0, //ใช้เพื่อดู Process การ Upload
      filesMetadata: [], //ใช้เพื่อรับข้อมูล Metadata จาก Firebase
      rows: [] //ใช้วาด DataTable
    };
  }
  handleInit() {
    // handle init file upload here
    console.log('now initialised', this.pond);
  }

  handleProcessing(fieldName, file, metadata, load, error, progress, abort) {
    // handle file upload here
    console.log(' handle file upload here');
    console.log(file);

    const fileUpload = file;
    //const storage = firebase.storage();
    const storageRef = storage.ref(`filepond/${file.name}`);
    const task = storageRef.put(fileUpload);

    task.on(
      `state_changed`,
      snapshort => {
        console.log(snapshort.bytesTransferred, snapshort.totalBytes);
        let percentage =
          (snapshort.bytesTransferred / snapshort.totalBytes) * 100;
        //Process
        this.setState({
          uploadValue: percentage
        });
      },
      error => {
        //Error
        this.setState({
          messag: `Upload error : ${error.message}`
        });
      },
      () => {
        //Success
        this.setState({
          messag: `Upload Success`,
          picture: task.snapshot.downloadURL //เผื่อนำไปใช้ต่อในการแสดงรูปที่ Upload ไป
        });
      }
    );
  }

  render() {
    const { row, filesMetadata } = this.state;
    return (
      <div className="Store">
        <div className="Margin-25">
          {/* Pass FilePond properties as attributes */}
          <FilePond
            allowMultiple={true}
            maxFiles={300}
            ref={ref => (this.pond = ref)}
            server={{ process: this.handleProcessing.bind(this) }}
            oninit={() => this.handleInit()}
          >
            {/* Set current files using the <File/> component */}
            {this.state.files.map(file => (
              <File key={file} source={file} />
            ))}
          </FilePond>
        </div>
      </div>
    );
  }
}

export default Store;
