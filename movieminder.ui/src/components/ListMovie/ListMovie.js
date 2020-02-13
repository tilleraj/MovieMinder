import React from 'react';
import {
  Button
} from 'reactstrap';

import './ListMovie.scss';

class ListMovie extends React.Component {

  moveToWatchEvent = (e) => {
    e.preventDefault();
    this.props.moveToWatch(this.props.userMovie.id);
  }

  moveToSeenEvent = (e) => {
    e.preventDefault();
    this.props.moveToSeen(this.props.userMovie.id);
  }

  moveToShameEvent = (e) => {
    e.preventDefault();
    this.props.moveToShame(this.props.userMovie.id);
  }

  deleteUserMovieEvent = (e) => {
    e.preventDefault();
    this.props.deleteUserMovie(this.props.userMovie.id);
  }

  calculateDaysSinceReleased = (releaseDate) => {
    const today = new Date(Date.now());
    const rDate = new Date(releaseDate);
    const howOld = today - rDate;
    const daysOld = Math.floor(howOld / (1000 * 60 * 60 * 24));
    return daysOld;
  }

  render() {
    const { userMovie } = this.props;
    const daysSinceReleased = this.calculateDaysSinceReleased(userMovie.releaseDate);
    return (
      <div className="col-xs-12 col-md-6 col-lg-4" key={`userMovie${userMovie.id}`}>
        <div className="card">
          <div className="card-body">
            <img className="img-fluid poster" src={userMovie.posterURL} alt="Poster" />
            <h5 className="card-title">{userMovie.title}</h5>
            <p className="card-text">Released: {daysSinceReleased} days ago</p>
            {(userMovie.watchList ? "" : <Button outline onClick={this.moveToWatchEvent} className="ml-1 mr-1" color="primary">Wanna Watch</Button>)}
            {(userMovie.seenList ? "" : <Button outline onClick={this.moveToSeenEvent} className="ml-1 mr-1" color="success">Watched it</Button>)}
            {(userMovie.shameList ? "" : <Button outline onClick={this.moveToShameEvent} className="ml-1 mr-1" color="warning">Missed it</Button>)}
            <Button outline onClick={this.deleteUserMovieEvent} className="ml-1 mr-1" color="danger">Forget it</Button>
          </div>
        </div>
      </div >
    )
  }
}

export default ListMovie;