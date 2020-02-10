import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConnection from '../requests/connection';

import userData from '../data/UserData';

import Login from '../components/Login/Login';
import NavBar from '../components/NavBar/NavBar';
import Home from '../components/Home/Home';
import MyLists from '../components/MyLists/MyLists';
import NowShowing from '../components/NowShowing/NowShowing';
import Register from '../components/Register/Register';

import './App.scss';

firebaseConnection();

const PublicRoute = ({ component: Component, authed, profile, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component {...props} {...rest} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route render={props => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component {...props} {...rest} />)
    : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />));
  return <Route render={props => routeChecker(props)} />;
};

// const PrivateRoute = ({ component: Component, authed, profile, ...rest }) => {
//   const routeChecker = (props) => {
//     if (authed === true && profile === "" || profile === null) {
//       return (<Redirect to={{ pathname: '/register', state: { from: props.location } }} />)
//     }
//     if (authed === true && profile !== null) {
//       return (<Component {...props} {...rest} />)
//     }
//     return (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />)
//   }
//   return <Route render={props => routeChecker(props)} />;
// };

const defaultProfile = {
  username: '',
  email: '',
  zip: ''
}

class App extends React.Component {
  state = {
    authed: false,
    isRegFormFirstLoad: false,
    profile: null,
    email: null
  };

  logout = () => this.setState({ authed: false, profile: null, email: null, isRegFormFirstLoad: false });

  setProfile = profile => this.setState({ profile, authed: true });

  setIsRegFormFirstLoadToTrue = () => {
    this.setState({ isRegFormFirstLoad: true });
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
        this.checkForProfile(user);
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  checkForProfile(user) {
    userData.getUserByEmail(user.email)
      .then((userProfile) => {
        this.setProfile(userProfile.data);
        console.log(userProfile);
        if (userProfile.data === "") {
          const noProfileEmail = firebase.auth().currentUser.email;
          this.setState({ email: noProfileEmail });
        }
      })
      .catch((error) => console.error('could not get profile', error));
  }

  render() {
    const { authed, isRegFormFirstLoad, profile, email } = this.state;

    return (
      <div className="App">
        <Router>
          <NavBar authed={authed} profile={profile} logout={this.logout} />
          <div className="container">
            <div className="row">
              <Switch>
                <PublicRoute path="/login" component={Login} authed={authed} profile={profile} setProfile={this.setProfile} />
                <PrivateRoute path="/home"
                  component={Home}
                  authed={authed}
                  profile={profile}
                  email={email}
                  isRegFormFirstLoad={isRegFormFirstLoad}
                  setIsRegFormFirstLoadToTrue={this.setIsRegFormFirstLoadToTrue}
                  setProfile={this.setProfile} />
                <PrivateRoute path="/mylists" component={MyLists} authed={authed} profile={profile} />
                <PrivateRoute path="/register" component={Register} authed={authed} profile={profile} setProfile={this.setProfile} />
                <PrivateRoute path="/showtimes" component={NowShowing} authed={authed} profile={profile} />
                <Redirect from="*" to="/home" />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;