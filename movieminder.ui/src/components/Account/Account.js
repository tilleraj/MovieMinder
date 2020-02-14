import React from 'react';
// import {
//   Button
// } from 'reactstrap'

import './Account.scss';

class Account extends React.Component {

  render() {

    return (
      <div className="col">
        <div className="Account">
          <div className="card">
            <div className="card-body">
              {/* <Button outline ><i className="fas fa-pencil-alt"></i></Button> */}
              {/* <p>Search Radius:</p> */}
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <th scope="row">Username</th>
                    <td>{this.props.profile.username}</td>
                  </tr>
                  <tr>
                    <th scope="row">Zip Code</th>
                    <td>{this.props.profile.zip}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Account;