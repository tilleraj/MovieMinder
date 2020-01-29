import React from 'react';
import { Button } from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/auth';
import movieData from '../../data/MovieData';
import userData from '../../data/UserData';
import userMovieData from '../../data/UserMovieData';
import './Auth.scss';

class Auth extends React.Component {

  componentDidMount() {
    movieData.getMovieById(4)
      .then((resp) => {
        console.error('Movie Id 4:', resp);
      })
      .catch((error) => console.error(error));

    movieData.getAllMovies()
      .then((resp) => {
        console.error('AllMovies:', resp);
      })
      .catch((error) => console.error(error));

    userData.getUserById(4)
      .then((resp) => {
        console.error('User Id 4:', resp);
      })
      .catch((error) => console.error(error));

    userData.getAllUsers()
      .then((resp) => {
        console.error('AllUsers:', resp);
      })
      .catch((error) => console.error(error));

    userMovieData.getUserMovieById(4)
      .then((resp) => {
        console.error('UserMovie Id 4:', resp);
      })
      .catch((error) => console.error(error));

    userMovieData.getAllUserMovies()
      .then((resp) => {
        console.error('AllUserMovies:', resp);
      })
      .catch((error) => console.error(error));
  }

  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  render() {
    return (
      <div className="Auth col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2">
        <div className="card">
          <h1>Welcome to MovieMinder!</h1>
          <p>Always meaning to go to movies in theaters?</p>
          <p>Always forgetting to see those movies before they leave?</p>
          <p>You're in the right place!</p>
          <Button color="secondary" onClick={this.loginClickEvent}>Login with Google</Button>
        </div>
      </div>
    );
  }
}

export default Auth;
