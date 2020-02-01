import React from 'react';

import userMovieData from '../../data/UserMovieData';

import './MyLists.scss';

class MyLists extends React.Component {

  state = {
    userMovies: [],
    currentUser: {}
  }

  componentDidMount() {
    this.updateAllUserMovieData();
  }

  updateAllUserMovieData() {
    // This is data for a test user. Will need to get user profile in App and pass as a prop in the routing once profile creation is done
    userMovieData.getAllUserMoviesWithMovieDataByUser(5)
      .then((resp) => {
        let userMovies = resp.data;
        console.error('AllUserMoviesWithMovieData:', userMovies);
        let freshUserMovies = [...userMovies];
        this.setState({ userMovies: freshUserMovies })
      })
      .catch(error => console.error(`could not get UserMoviesWithMovieData`, error));
  }


  render() {
    const testUserMovies = this.state.userMovies.map(userMovie => (
      <div className="col-xs-12 col-md-6 col-lg-4" key={`userMovie${userMovie.id}`}>
        <div className="card">
          <div className="card-body">
            <ul>
              <li>id: {userMovie.id}</li>
              <li>userId: {userMovie.userId}</li>
              <li>movieId: {userMovie.movieId}</li>
              <li>watchList: {userMovie.watchList}</li>
              <li>seenList: {userMovie.seenList}</li>
              <li>shameList: {userMovie.shameList}</li>
              <li>title: {userMovie.title}</li>
              <li>releaseDate: {userMovie.releaseDate}</li>
              <li>leftTheaters: {userMovie.leftTheaters}</li>
              <li>retireDate: {userMovie.retireDate}</li>
              <li>posterURL: {userMovie.posterURL}</li>
            </ul>
          </div>
        </div>
      </div>
    ));
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
          {testUserMovies}
        </div>
      </div>
    );
  }
}

export default MyLists;
