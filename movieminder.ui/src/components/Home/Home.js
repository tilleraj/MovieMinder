import React from 'react';
import {
  Button,
} from 'reactstrap';

import Register from '../Register/Register';
import './Home.scss';

class Home extends React.Component {


  render() {
    const register = () => {
      if (!this.props.profile) {
        return (
          < Register {...this.props}/>)
      }
    }
    return (
      <div className="Home">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <button type="button" className="btn btn-primary">Bootstrap Button</button>
              <Button>Reactstrap Button</Button>
              {register()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
