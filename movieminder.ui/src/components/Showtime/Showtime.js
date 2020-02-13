import React from 'react';

import './Showtime.scss';

class Showtime extends React.Component {

  render() {
    const { showtime } = this.props;
    const time = showtime.dateTime.slice(11);
    return (
      <tr>
        <td>{showtime.theatre.name}</td>
        <td>{time}</td>
        <td><a href={showtime.ticketURI}>Tickets</a></td>
      </tr>
    )
  }
}

export default Showtime;