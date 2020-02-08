import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

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

  sortMovies() {
    var userMovies = [...this.state.userMovies];
    var newWatchList = userMovies.filter(movie => movie.watchList === true);
    var newSeenList = userMovies.filter(movie => movie.seenList === true);
    var newShameList = userMovies.filter(movie => movie.shameList === true);
    this.setState({ watchList: [...newWatchList], seenList: [...newSeenList], shameList: [...newShameList] });
  }

  buildList(movieList) {
    const builtList = movieList.map(userMovie => (
      <div className="col-xs-12 col-md-6 col-lg-4" key={`userMovie${userMovie.id}`}>
        <div className="card">
          {/* <img className="card-img-top" src={userMovie.posterURL} alt="Card image cap" /> */}
          <div className="card-body">
            <img className="img-fluid poster" src={userMovie.posterURL} alt="Poster" />
            <h5 className="card-title">{userMovie.title}</h5>
            <p>id: {userMovie.id} userId: {userMovie.userId} movieId: {userMovie.movieId} watchList: {userMovie.watchList} seenList: {userMovie.seenList} shameList: {userMovie.shameList} releaseDate: {userMovie.releaseDate} leftTheaters: {userMovie.leftTheaters} retireDate: {userMovie.retireDate}</p>
            <Button color="success">Watched it</Button>
            <Button color="warning">Missed it</Button>
            <Button color="danger">Forget it</Button>
          </div>
        </div>
      </div >
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
                My Lists Page
            </div>
            </div>
          </div>
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
