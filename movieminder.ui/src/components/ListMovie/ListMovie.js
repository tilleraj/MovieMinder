import React from 'react';
import {
  Button,
  ButtonGroup
} from 'reactstrap';

import './ListMovie.scss';

class ListMovie extends React.Component {

  moveToSeenEvent = (e) => {
    e.preventDefault();
    console.log(e.target.id)
    this.props.moveToSeen(this.props.userMovie.id);
  }

  moveToShameEvent = (e) => {
    e.preventDefault();
    console.log(e.target.id)
    this.props.moveToShame(this.props.userMovie.id);
  }

  deleteUserMovieEvent = (e) => {
    e.preventDefault();
    console.log(e.target.id)
    this.props.deleteUserMovie(this.props.userMovie.id);
  }

  render() {
    const { userMovie } = this.props;
    return (
      <div className="col-xs-12 col-md-6 col-lg-4" key={`userMovie${userMovie.id}`}>
        <div className="card">
          <div className="card-body">
            <img className="img-fluid poster" src={userMovie.posterURL} alt="Poster" />
            <h5 className="card-title">{userMovie.title}</h5>
            <Button outline onClick={this.moveToSeenEvent} className="ml-1 mr-1" color="success">Watched it</Button>
            <Button outline onClick={this.moveToShameEvent} className="ml-1 mr-1" color="warning">Missed it</Button>
            <Button outline onClick={this.deleteUserMovieEvent} className="ml-1 mr-1" color="danger">Forget it</Button>
          </div>
        </div>
      </div >
    )
  }
}

export default ListMovie;