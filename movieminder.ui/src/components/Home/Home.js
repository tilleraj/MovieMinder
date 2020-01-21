import React from 'react';
import {
  Button,
} from 'reactstrap';
import './Home.scss';

class Home extends React.Component {


  render() {
    return (
      <div className="Home">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <button type="button" className="btn btn-primary">Bootstrap Button</button>
              <Button>Reactstrap Button</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
