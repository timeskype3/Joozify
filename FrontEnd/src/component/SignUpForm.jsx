import React from 'react';
import { Form, Input, Tooltip, Icon, Checkbox, Button } from 'antd';
import firebase from '../firebase/index';

const database = firebase.firestore;
const users = database.collection('User');

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    email: '',
    password: '',
    nickname: '',
    phone: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { email, password, nickname, phone } = values;
        //Create user in Authentication
        firebase
          .auth()
          .createUserWithEmailAndPassword(values.email, values.password)
          .then(response => {
            // Get user uid from authentication to named the doc and create userInfo in database
            // console.log("response: ", response);
            const userUID = response.user.uid;
            // console.log("UID: ", userUID);
            // Create userInfo in database
            response.user
              .updateProfile({
                displayName: nickname
              })
              .catch(err => {
                console.error(err);
              });
            users
              .doc(userUID)
              .set({
                email,
                password,
                nickname,
                phone
              })
              .then(docRef => {
                console.log('Create userInfo completed');
              })
              .catch(err => {
                console.error(err);
              });
          })
          .catch(function(error) {
            console.log('Create error, err: ', error.code);
          });
        // console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  render() {
    // Show all user in database

    // database
    //   .collection('User')
    //   .get()
    //   .then(snapshot => {
    //     snapshot.forEach(doc => {
    //       console.log('userjaaa', doc.id, doc.data());
    //     });
    //   });

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
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
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
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!'
              },
              {
                validator: this.validateToNextPassword
              }
            ]
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!'
              },
              {
                validator: this.compareToFirstPassword
              }
            ]
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              Nickname&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('nickname', {
            rules: [
              {
                required: true,
                message: 'Please input your nickname!',
                whitespace: true
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Phone Number">
          {getFieldDecorator('phone', {
            rules: [
              { required: true, message: 'Please input your phone number!' }
            ]
          })(<Input style={{ width: '100%' }} />)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
            rules: [
              {
                required: true,
                message: 'Please check this box'
              }
            ]
          })(
            <Checkbox>
              I have read the <a href="/">agreement</a>
            </Checkbox>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'register' })(RegistrationForm);
