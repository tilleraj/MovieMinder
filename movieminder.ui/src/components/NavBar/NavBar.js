import React from 'react';
import { withRouter } from "react-router";
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  // Input,
  // Form,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import 'firebase/auth';

import authRequests from '../../requests/auth';

import './NavBar.scss';

class NavBar extends React.Component {

  state = {
    isOpen: false,
    dropdownOpen: false,
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  toggleDropdown = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  loginClickEvent = (event) => {
    event.preventDefault();
    authRequests.loginUser()
      .then(() => this.props.history.push('/home'))
      .catch(error => console.error('unable to login', error));
  };

  logoutClickEvent = () => {
    authRequests.logoutUser();
    this.props.logout();
  };

  toHome = () => this.props.history.push('/home');


  render() {
    const { authed, profile } = this.props;
    const buildNavbar = () => {
      if (authed && profile !== null && profile !== "") {
        //  full Nav
        return (
          <Nav className="ml-auto" navbar>
            {/* <NavItem>
              <NavLink tag={RRNavLink} to='/home'>Home</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink tag={RRNavLink} to='/home'>My Lists</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/showtimes'>Now Showing</NavLink>
            </NavItem>
            <NavItem>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown} inNavbar={true}>
                <DropdownToggle color="dark" caret nav>
                  {this.props.profile ? (this.props.profile.username) : ('Account')}</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <NavItem>
                      <NavLink tag={RRNavLink} to='/account' className="text-dark p-0">Profile</NavLink>
                    </NavItem>
                  </DropdownItem>
                  <DropdownItem>
                    <NavItem>
                      <NavLink className="text-dark p-0" onClick={this.logoutClickEvent}>Logout</NavLink>
                    </NavItem>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
          </Nav>
        );
      } else if (authed) {
        //  authed, no profile
        return (
          <Nav navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to='/home'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="pointer" onClick={this.logoutClickEvent} >Logout</NavLink>
            </NavItem>
          </Nav>
        );
      } else {
        return (
          // no auth
          <Nav navbar>
          </Nav >
        );
      }
    };

    return (
      <Navbar color="dark" dark expand="md">
        <div className="container">
          <NavbarBrand className="col-2-sm col-1-md text-left pointer font-weight-bold " onClick={this.toHome}>MovieMinder</NavbarBrand>
          <NavbarToggler onClick={this.toggleCollapse} />
          <Collapse className="col-4-md" style={{ flexGrow: 0 }} isOpen={this.state.isOpen} navbar>
            {buildNavbar()}
          </Collapse>
        </div>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);



// if (authed) {
//   return (
//     <Nav className="ml-auto" navbar>
//       <NavItem>
//         <NavLink tag={RRNavLink} to='/home'>Home</NavLink>
//       </NavItem>
//       <NavItem>
//         <NavLink tag={RRNavLink} to='/mylists'>My Lists</NavLink>
//       </NavItem>
//       <NavItem>
//         <NavLink tag={RRNavLink} to='/showtimes'>Now Showing</NavLink>
//       </NavItem>
//       <NavItem>
//         <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown} inNavbar={true}>
//           <DropdownToggle color="dark" caret nav>
//             {this.props.profile ? (this.props.profile.username) : ('Account')}</DropdownToggle>
//           <DropdownMenu>
//             {profile ? (
//               <DropdownItem>
//                 <NavItem>
//                   <NavLink tag={RRNavLink} to='/account' className="text-dark p-0">Profile</NavLink>
//                 </NavItem>
//               </DropdownItem>
//             ) : (
//                 <DropdownItem>
//                   <NavItem>
//                     <NavLink tag={RRNavLink} to='/register' className="text-dark p-0">Register</NavLink>
//                   </NavItem>
//                 </DropdownItem>
//               )}
//             <DropdownItem>
//               <NavItem>
//                 <NavLink tag={RRNavLink} to='/apitest' className="text-dark p-0">API Test</NavLink>
//               </NavItem>
//             </DropdownItem>
//             <DropdownItem>
//               <NavItem>
//                 <NavLink className="text-dark p-0" onClick={this.logoutClickEvent}>Logout</NavLink>
//               </NavItem>
//             </DropdownItem>
//           </DropdownMenu>
//         </Dropdown>
//       </NavItem>
//     </Nav>
//   );
// }
// return (
//   <Nav navbar>
//     <NavItem>
//       <NavLink tag={RRNavLink} to='/home'>Home</NavLink>
//     </NavItem>
//     <NavItem>
//       <NavLink className="pointer" onClick={this.loginClickEvent} >
//         <i className="fab fa-google"></i> Login
//     </NavLink>
//     </NavItem>
//   </Nav>
// );