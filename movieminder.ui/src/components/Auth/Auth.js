import React from 'react';
import { Button } from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  render() {
    return (
      <div className="Auth col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2">
        <div className="card">
          <h1>Welcome to MovieMinder!</h1>
          <p>Always meaning to go to movies in theaters?</p>
          <p>Always forgetting to see those movies before they leave?</p>
          <p>You're in the right place!</p>
          <Button color="secondary" onClick={this.loginClickEvent}>Login with Google</Button>
        </div>
      </div>
    );
  }
}

export default Auth;
