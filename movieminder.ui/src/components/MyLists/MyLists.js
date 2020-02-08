import React from 'react';

import ListMovie from '../ListMovie/ListMovie';
import userMovieData from '../../data/UserMovieData';

import './MyLists.scss';

class MyLists extends React.Component {

  state = {
    userMovies: [],
    currentUser: {},
    watchList: [],
    seenList: [],
    shameList: []
  }

  componentDidMount() {
    this.updateAllUserMovieData();
  }

  updateAllUserMovieData() {
    // This is data for a test user. Will need to get user profile in App and pass as a prop in the routing once profile creation is done
    userMovieData.getAllUserMoviesWithMovieDataByUser(5)
      .then((resp) => {
        let userMovies = resp.data;
        // console.error('AllUserMoviesWithMovieData:', userMovies);
        let freshUserMovies = [...userMovies];
        this.setState({ userMovies: freshUserMovies });
        this.sortMovies();
      })
      .catch(error => console.error(`could not get UserMoviesWithMovieData`, error));
  }

  moveToWatch = (userMovieId) => {
    userMovieData.moveLists(userMovieId, "watch")
      .then(() => this.updateAllUserMovieData())
      .catch(error => console.error('unable to move movie to watchlist', error));
  }

  moveToSeen = (userMovieId) => {
    userMovieData.moveLists(userMovieId, "seen")
      .then(() => this.updateAllUserMovieData())
      .catch(error => console.error('unable to mark movie as seen', error));
  }

  moveToShame = (userMovieId) => {
    userMovieData.moveLists(userMovieId, "shame")
      .then(() => this.updateAllUserMovieData())
      .catch(error => console.error('unable to mark movie as shame', error));
  }

  deleteUserMovie = (userMovieId) => {
    userMovieData.deleteUserMovie(userMovieId)
      .then(() => this.updateAllUserMovieData())
      .catch(error => console.error('unable to delete movie', error));
  }

  sortMovies() {
    var userMovies = [...this.state.userMovies];
    var newWatchList = userMovies.filter(movie => movie.watchList === true);
    var newSeenList = userMovies.filter(movie => movie.seenList === true);
    var newShameList = userMovies.filter(movie => movie.shameList === true);
    this.setState({ watchList: [...newWatchList], seenList: [...newSeenList], shameList: [...newShameList] });
  }

  buildList(movieList) {
    const builtList = movieList.map(userMovie => (
      <ListMovie
        key={`userMovie${userMovie.id}`}
        userMovie={userMovie}
        moveToWatch={this.moveToWatch}
        moveToSeen={this.moveToSeen}
        moveToShame={this.moveToShame}
        deleteUserMovie={this.deleteUserMovie}
      />
    ));
    return builtList
  }

  render() {
    const { watchList, seenList, shameList } = this.state;
    const builtWatchList = this.buildList(watchList);
    const builtSeenList = this.buildList(seenList);
    const builtShameList = this.buildList(shameList);
    return (
      <div className="MyLists">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                Watch List
            </div>
            </div>
          </div>
          {builtWatchList}
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                Seen List
            </div>
            </div>
          </div>
          {builtSeenList}
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                Shame List
            </div>
            </div>
          </div>
          {builtShameList}
        </div>
      </div>
    );
  }
}

export default MyLists;
