import React from 'react';

import './MovieSchedule.scss';

class MovieSchedule extends React.Component {

  render() {
    const { movie } = this.props;
    return (
      <tr>
        <td>{movie.tmsId}</td>
      </tr>
    )
  }
}


export default MovieSchedule;