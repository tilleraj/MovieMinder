import React from 'react';
import {
  Table,
} from 'reactstrap';

import Showtime from '../Showtime/Showtime';

import './MovieSchedule.scss';

class MovieSchedule extends React.Component {

  render() {
    const { movie } = this.props;
    const showtimes = movie.showtimes.map((showtime) => (
      <Showtime
        key={`what${movie.tmsId}where${showtime.theatre.id}when${showtime.dateTime}`}
        showtime={showtime}
      />
    ));
    return (
      <div className="col-xs-12 col-md-6 MovieSchedule">
        <div className="card">
          <h4>{movie.title}</h4>
          <Table striped responsive>
            <thead>
              <tr>
                <th scope="col">Theatre</th>
                <th scope="col">Time</th>
                <th scope="col">Tickets</th>
              </tr>
            </thead>
            <tbody>
              {showtimes}
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}


export default MovieSchedule;