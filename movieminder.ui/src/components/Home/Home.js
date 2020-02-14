import React from 'react';
import {
  Button,
} from 'reactstrap';
import MyLists from '../MyLists/MyLists';
import Register from '../Register/Register';
import './Home.scss';

class Home extends React.Component {


  render() {
    const { profile } = this.props;
    const checkRegistration = () => {
      if (profile === null || profile === "") {
        return (
          < Register {...this.props} />)
      } else {
        return (
          // <div className="card">
          //   <div className="card-body">
          //     <button type="button" className="btn btn-primary">This is a Homepage</button>
          //     <Button>Welcome {this.props.profile.userName}</Button>
          //   </div>
          // </div>
          <MyLists authed={this.props.authed} profile={this.props.profile}/>
        );
      }
    }
    return (
      <div className="col">
        <div className="Home">
          {checkRegistration()}
        </div >
      </div >
    );
  }
}

export default Home;
