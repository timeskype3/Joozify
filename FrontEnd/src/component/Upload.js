import React, { Component } from 'react';
import firebase from '../firebase/index';
import { Form } from 'antd';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progress: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = () => {
    const { image } = this.state;
    const uploadtask = firebase
      .storage()
      .ref(`image/${image.name}`)
      .put(image);
    uploadtask.on(
      'state_changed',
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        console.log(error);
      },
      () => {
        firebase
          .storage()
          .ref('image')
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            this.setState({ url });
          });
      }
    );
  };

  //   render() {
  //     return (
  //       <div>
  //         <progress value={this.state.progress} max="100"/>
  //         <br/>
  //         <input type="file" onChange={this.handleChange}/>
  //         <button onClick={this.handleUpload}>Upload</button>
  //         <br/>
  //         <img src={this.state.url} alt="Uploaded image"/>
  //       </div>
  //     )
  //   }
  // }

  // export default Upload;

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="Image">
          {/* {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!'
              },
              {
                required: true,
                message: 'Please input your E-mail!'
              }
            ]
          })(<Input />)} */}
          <img src={this.state.url} alt="Uploaded image" />
          <progress value={this.state.progress} max="100" />
          <br />
          <input type="file" onChange={this.handleChange} />
          <button onClick={this.handleUpload}>Upload</button>
          <br />
        </Form.Item>

        <Form.Item label="Title">
          <input />
        </Form.Item>

        <Form.Item label="Artist">
          <input />
        </Form.Item>

        <Form.Item label="Genre">
          <input />
        </Form.Item>

        <Form.Item label="Album">
          <input />
        </Form.Item>

        <Form.Item label="Year">
          <input />
        </Form.Item>

        <Form.Item label="Mp3">
          <input />
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'Image' })(Upload);
