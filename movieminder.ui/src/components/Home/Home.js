import React from 'react';
import {
  Button,
} from 'reactstrap';

import Register from '../Register/Register';
import './Home.scss';

class Home extends React.Component {


  render() {
    const { profile, email } = this.props;
    const checkRegistration = () => {
      if (profile === null || profile === "") {
        return (
          < Register {...this.props} />)
      } else {
        return (
          <div>
            <button type="button" className="btn btn-primary">This is a Homepage</button>
            <Button>Welcome {this.props.profile.userName}</Button>
          </div>
        );
      }
    }
    return (
      <div className="Home">
        <div className="col">
          <div className="card">
            <div className="card-body">
              {checkRegistration()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
