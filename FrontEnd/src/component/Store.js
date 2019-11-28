import React, { Component } from 'react';
import './Store.css';
import firebase from '../firebase/index';
import 'bulma/css/bulma.css';
import { FilePond, File, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import StorageDataTable from './StoreDataTable';

import FilePondImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
registerPlugin(FilePondImagePreview);

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
    const storageRef = firebase.storage().ref(`filepond/${file.name}`);
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
          messag: `Upload error : ${error.messag}`
        });
      },
      () => {
        //Success
        console.log('success-ja ');
        this.setState({
          messag: `Upload Success`,
          picture: task.snapshot.downloadURL //เผื่อนำไปใช้ต่อในการแสดงรูปที่ Upload ไป
        });

        //Get metadata
        storageRef
          .getMetadata()
          .then(metadata => {
            // Metadata now contains the metadata for 'filepond/${file.name}'
            let metadataFile = {
              name: metadata.name,
              size: metadata.size,
              contentType: metadata.contentType,
              fullPath: metadata.fullPath,
              downloadURLs: metadata.downloadURLs[0]
            };

            //Process save metadata
            const databaseRef = firebase.database.ref('/filepond');
            databaseRef.push({ metadataFile });
          })
          .catch(function(error) {
            //   this.setState({
            //     messag: `Upload error : ${error.message}`
            //   })
          });
      }
    );
  }

  //ใช้ตอนที่ยังไม่ Mount DOM
  componentWillMount() {
    this.getMetaDataFromDatabase();
  }

  //โหลดข้อมูล Metadata จาก Firebase
  getMetaDataFromDatabase() {
    console.log('getMetaDataFromDatabase');
    const databaseRef = firebase.database.ref('/filepond');

    databaseRef.on('value', snapshot => {
      this.setState(
        {
          filesMetadata: snapshot.val()
        },
        () => this.addMetadataToList()
      );
    });
  }

  //โหลดข้อมูลเข้า list table
  addMetadataToList() {
    let i = 1;
    let rows = [];

    //Loop add data to rows
    for (let key in this.state.filesMetadata) {
      let fileData = this.state.filesMetadata[key];

      let objRows = {
        no: i++,
        key: key, //ใช้เพื่อ Delete
        name: fileData.metadataFile.name,
        downloadURLs: fileData.metadataFile.downloadURLs,
        fullPath: fileData.metadataFile.fullPath,
        size: fileData.metadataFile.size,
        contentType: fileData.metadataFile.contentType
      };

      rows.push(objRows);
    }

    this.setState(
      {
        rows: rows
      },
      () => {
        console.log('Set Rows');
      }
    );
  }

  deleteMetaDataFromDatabase(e, rowData) {
    const storageRef = firebase.storage().ref(`filepond/${rowData.name}`);

    // Delete the file on storage
    storageRef
      .delete()
      .then(() => {
        console.log('Delete file success');

        let databaseRef = firebase.database.ref('/filepond');

        // Delete the file on realtime database
        databaseRef
          .child(rowData.key)
          .remove()
          .then(() => {
            console.log('Delete metada success');
            console.log(this);
            this.getMetaDataFromDatabase();
          })
          .catch(error => {
            console.log('Delete metada error : ', error.message);
          });
      })

      .catch(error => {
        console.log('Delete file error : ', error.message);
      });
  }

  render() {
    const { rows, filesMetadata } = this.state;
    return (
      <div className="Store">
        <div className="Margin-25">
          <FilePond
            allowMultiple={true}
            maxFiles={3}
            ref={ref => (this.pond = ref)}
            server={{ process: this.handleProcessing.bind(this) }}
            oninit={() => this.handleInit()}
          >
            {this.state.files.map(file => (
              <File key={file} source={file} />
            ))}
          </FilePond>

          <StorageDataTable
            rows={rows}
            filesMetadata={filesMetadata}
            deleteData={this.deleteMetaDataFromDatabase}
          />
        </div>
      </div>
    );
  }
}

export default Store;
