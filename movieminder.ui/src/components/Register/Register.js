import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

import userData from '../../data/UserData';

const defaultProfile = {
  username: '',
  email: '',
  zip: ''
}

class Register extends React.Component {
  state = {
    profile: defaultProfile
  }

  submitRegisterForm = (event) => {
    event.preventDefault();
    const newProfile = this.state.profile;
    newProfile.email = firebase.auth().currentUser.email
    this.setState({ profile: defaultProfile });
    userData.addUser(newProfile)
      .then((response) => {
        this.props.setProfile(response.data);
        this.props.history.push('/home');
      })
      .catch(error => console.error(error));
  }

  updateProfileForm = (type, event) => {
    const profile = { ...this.state.profile };
    profile[type] = event.target.value;
    this.setState({ profile });
  }

  updateUsername = event => this.updateProfileForm('username', event);
  updateZip = event => this.updateProfileForm('zip', event);

  render() {
    const { profile } = this.state;
    return (
      <div className="row justify-content-center pt-5 text-left">
        <Form className="col-6" onSubmit={this.submitRegisterForm}>
          <FormGroup>
            <div className="lead">Looks like you don't have an account yet. Please register below!</div>
          </FormGroup>
          <FormGroup>
            <Label for="user-username">Username</Label>
            <Input type="text" name="username" id="user-username" placeholder="Username" value={profile.username} onChange={this.updateUsername} />
            <Label for="user-zip">Zipcode</Label>
            <Input type="text" name="zip" id="user-zip" placeholder="Zip" value={profile.zip} onChange={this.updateZip} />
          </FormGroup>
          <Button type="submit">Register</Button>
        </Form>
      </div>
    );
  }
}

export default Register;