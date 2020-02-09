import React from 'react';
import movieScheduleData from '../../data/MovieScheduleData';

import MovieSchedule from '../MovieSchedule/MovieSchedule';

import './NowShowing.scss';

class NowShowing extends React.Component {

  state = {
    movieSchedules: []
  }

  componentDidMount() {
    this.getTestMovieSchedule();
  }

  getTestMovieSchedule() {
    // This is an example of a movie schedule query
    movieScheduleData.getConciseMovieSchedule("2020-02-10")
      .then((resp) => {
        let movieSchedules = resp.data;
        let freshMovieSchedules = [...movieSchedules];
        this.setState({ movieSchedules: freshMovieSchedules })
      })
      .catch(error => console.error(`could not get MovieScheduleData`, error));
  }

  buildMovieList(movie) {
    const builtList = movie.showtimes.map(showtime => (
      <div>
        <p>{showtime.dateTime}</p>
      </div>
    ));
    return builtList;
  }

  render() {
    const { movieSchedules } = this.state;
    const moviesWithTimes = movieSchedules.map(movie => (
      <MovieSchedule
        key={`movieSchedule${movie.tmsId}`}
        movie={movie}
      />
    ));
    return (
      <div className="NowShowing">
        <div className="row">
          {moviesWithTimes}
        </div>
      </div >
    );
  }
}

export default NowShowing;
