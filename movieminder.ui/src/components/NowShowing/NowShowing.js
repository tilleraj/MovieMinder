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

  // getTestMovieSchedule() {
  //   // This is an example of a movie schedule query
  //   movieScheduleData.getMovieScheduleByTmsId("2020-02-10","MV007920380000")
  //     .then((resp) => {
  //       let movieSchedules = resp.data;
  //       // console.error('MovieScheduleData:', movieSchedules);
  //       let freshMovieSchedules = [...movieSchedules];
  //       this.setState({ movieSchedules: freshMovieSchedules })
  //     })
  //     .catch(error => console.error(`could not get MovieScheduleData`, error));
  // }

  getTestMovieSchedule() {
    // This is an example of a movie schedule query
    movieScheduleData.getConciseMovieSchedule("2020-02-10")
      .then((resp) => {
        let movieSchedules = resp.data;
        // console.error('MovieScheduleData:', movieSchedules);
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
    console.log(builtList);
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
        <div className="col">
          <div className="card">
            <div className="card-body">
              Now Showing Page
              {moviesWithTimes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NowShowing;
