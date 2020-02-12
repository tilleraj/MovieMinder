import React from 'react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from 'reactstrap';

import './ListMovie.scss';

class ListMovie extends React.Component {

  state = {
    dropdownOpen: false
  }

  toggleDropdown = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

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

  render() {
    const { userMovie } = this.props;
    return (
      <div className="col-xs-12 col-md-6 col-lg-4" key={`userMovie${userMovie.id}`}>
        <div className="card">
          <div className="card-body">
            <img className="img-fluid poster" src={userMovie.posterURL} alt="Poster" />
            <h5 className="card-title">{userMovie.title}</h5>
            {(userMovie.watchList ? "" : <Button outline onClick={this.moveToWatchEvent} className="ml-1 mr-1" color="primary">Wanna Watch</Button>)}
            {(userMovie.seenList ? "" : <Button outline onClick={this.moveToSeenEvent} className="ml-1 mr-1" color="success">Watched it</Button>)}
            {(userMovie.shameList ? "" : <Button outline onClick={this.moveToShameEvent} className="ml-1 mr-1" color="warning">Missed it</Button>)}
            <Button outline onClick={this.deleteUserMovieEvent} className="ml-1 mr-1" color="danger">Forget it</Button>
            <Button outline ><i className="fas fa-trash-alt"></i></Button>
            <Button outline ><i className="fas fa-pencil-alt"></i></Button>

            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown} inNavbar={false}>
              <DropdownToggle color="dark" caret nav>
                Account</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  Edit<i className="fas fa-pencil-alt"></i>
                </DropdownItem>
                <DropdownItem>
                  Delete<i className="fas fa-trash-alt"></i>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div >
    )
  }
}

export default ListMovie;