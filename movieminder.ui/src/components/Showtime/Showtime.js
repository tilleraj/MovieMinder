import React from 'react';

import './Showtime.scss';

class Showtime extends React.Component {

  render() {
    const { showtime } = this.props;
    return (
      <tr>
        <td>{showtime.theatre.name}</td>
        <td>{showtime.dateTime}</td>
        <td><a href={showtime.ticketURI}>Tickets</a></td>
      </tr>
    )
  }
}

export default Showtime;