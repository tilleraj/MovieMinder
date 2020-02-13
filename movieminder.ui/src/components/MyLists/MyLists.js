import React from 'react';

import ListMovie from '../ListMovie/ListMovie';
import MovieForm from '../MovieForm/MovieForm';
import movieData from '../../data/MovieData';
import userMovieData from '../../data/UserMovieData';

import './MyLists.scss';

const defaultMovie = {
  id: '',
  title: '',
  releaseDate: '',
  leftTheaters: '',
  retireDate: '',
  posterURL: '',
};

class MyLists extends React.Component {

  state = {
    userMovies: [],
    isEditing: false,
    formMovie: defaultMovie,
    currentUser: {},
    watchList: [],
    seenList: [],
    shameList: []
  }

  componentDidMount() {
    this.updateData();
  }

  updateData() {
    const userId = this.props.profile.id;
    userMovieData.getAllUserMoviesWithMovieDataByUser(userId)
      .then((resp) => {
        let userMovies = resp.data;
        let freshUserMovies = [...userMovies];
        this.setState({ userMovies: freshUserMovies });
        this.sortMovies();
      })
      .catch(error => console.error(`could not get UserMoviesWithMovieData`, error));
  }

  movieFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.isEditing) {
      this.updateMovie(this.state.formMovie)
    } else {
      this.addMovie(this.state.formMovie);
    }
  }

  updateMovie = (updatedMovie) => {
    movieData.updateMovie(updatedMovie.id, updatedMovie)
      .then(() => {
        this.setState({ isEditing: false, formMovie: defaultMovie });
        this.updateData();
      })
      .catch(error => console.error('unable to update Movie', error));
  }

  addMovie = (newMovie) => {
    movieData.searchMovieByTitle(newMovie.title)
      .then((searchResult) => {
        let movie = searchResult.data;
        console.log(movie);
        let newMovieWithData = newMovie;
        if (movie.tmsId !== null) {
          newMovieWithData.releaseDate = movie.releaseDate;
          newMovieWithData.posterURL = movie.posterURL;
          console.log(newMovieWithData);
        }
        return (newMovieWithData)
      })
      .then((newMovieWithData) => {
        movieData.postMovie(newMovieWithData);
      })
      .catch(error => console.error('unable to add Movie', error));
  }

  // const userId = this.props.profile.id;
  // movieData.postMovie(newMovieWithData)
  //   .then((addedMovie) => {
  //     userMovieData.addUserMovie(userId, addedMovie.data.id)
  //       .then(() => {
  //         this.setState({ isEditing: false, formMovie: defaultMovie });
  //         this.updateData();
  //       })
  //       .catch(error => console.error('unable to add userMovie', error));
  //   })
  //   .catch(error => console.error('unable to add Movie', error));

  moveToWatch = (userMovieId) => {
    userMovieData.moveLists(userMovieId, "watch")
      .then(() => this.updateData())
      .catch(error => console.error('unable to move movie to watchlist', error));
  }

  moveToSeen = (userMovieId) => {
    userMovieData.moveLists(userMovieId, "seen")
      .then(() => this.updateData())
      .catch(error => console.error('unable to mark movie as seen', error));
  }

  moveToShame = (userMovieId) => {
    userMovieData.moveLists(userMovieId, "shame")
      .then(() => this.updateData())
      .catch(error => console.error('unable to mark movie as shame', error));
  }

  editMovie = (movieToEdit) => {
    const movie = { ...movieToEdit };
    this.setState({ isEditing: true, formMovie: movie });
  }

  deleteUserMovie = (userMovieId) => {
    userMovieData.deleteUserMovie(userMovieId)
      .then(() => this.updateData())
      .catch(error => console.error('unable to delete movie', error));
  }

  movieFormChange = (e) => {
    const newFormMovie = { ...this.state.formMovie };
    if (e.target.id === "releaseDate") {
      newFormMovie.releaseDate = e.target.value;
    }
    if (e.target.id === "posterURL") {
      newFormMovie.posterURL = e.target.value;
    }
    if (e.target.id === "title") {
      newFormMovie.title = e.target.value;
    }
    this.setState({ formMovie: newFormMovie });
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
            <MovieForm
              key={`movieForm`}
              formMovie={this.state.formMovie}
              movieFormChange={this.movieFormChange}
              movieFormSubmit={this.movieFormSubmit}
            />
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
