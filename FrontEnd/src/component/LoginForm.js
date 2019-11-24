import React from 'react';
import firebase from '../firebase/index';

// const database = firebase.firestore;
// const users = database.collection('User');
const auth = firebase.auth();

class LoginForm extends React.Component {
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          currentUser: user
        });
      }
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      currentUser: null,
      message: ''
    };
  }

  onChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    auth
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log('response: ', response);
        this.setState({
          currentUser: response.user
        });
      })
      .catch(error => {
        this.setState({
          message: error.message
        });
      });
  };

  logout = e => {
    e.preventDefault();
    auth.signOut().then(response => {
      this.setState({
        currentUser: null
      });
    });
  };

  render() {
    const { message, currentUser } = this.state;
    if (currentUser) {
      console.log(currentUser.uid);
      return (
        <div>
          <p> Hello {currentUser.email} </p>
          <button onClick={this.logout}> Logout </button>
        </div>
      );
    }
    return (
      <form onSubmit={this.onSubmit}>
        <div className="field">
          <label className="label"> Email </label>
          <div className="control">
            <input
              className="input"
              type="email"
              name="email"
              onChange={this.onChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label"> Password </label>
          <div className="control">
            <input
              className="input"
              type="password"
              name="password"
              onChange={this.onChange}
            />
          </div>
        </div>
        {message ? <p className="help is-danger"> {message} </p> : null}
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link"> Login </button>
          </div>
        </div>
      </form>
    );
  }
}

export default LoginForm;
