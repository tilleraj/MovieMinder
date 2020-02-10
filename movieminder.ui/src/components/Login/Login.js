import React from 'react';
import { Button } from 'reactstrap';
import 'firebase/auth';

import authRequests from '../../requests/auth';

import './Login.scss';

class Login extends React.Component {
  state = {
    response: null,
  }

  loginClickEvent = (e) => {
    e.preventDefault();
    authRequests.loginUser();
  };


  render() {
    return (
      <div className="Login col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2">
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

export default Login;
