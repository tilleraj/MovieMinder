import React from 'react';
import movieScheduleData from '../../data/MovieScheduleData';
import utilities from '../../data/utilities';

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
    const today = new Date(Date.now());
    const isoDate = today.toISOString();
    const shortDate = isoDate.substring(0, 10)
    // This is an example of a movie schedule query
    movieScheduleData.getConciseMovieSchedule(shortDate)
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

    const sortedMovies = utilities.alphabetize(movieSchedules, 'title', 'asc');

    const moviesWithTimes = sortedMovies.map(movie => (
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
