import React from 'react';
import movieScheduleData from '../../data/MovieScheduleData';

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
    movieScheduleData.getMovieScheduleByTmsId("MV007920380000")
      .then((resp) => {
        let movieSchedules = resp.data;
        // console.error('MovieScheduleData:', movieSchedules);
        let freshMovieSchedules = [...movieSchedules];
        this.setState({ movieSchedules: freshMovieSchedules })
      })
      .catch(error => console.error(`could not get MovieScheduleData`, error));
  }

  render() {
    return (
      <div className="NowShowing">
        <div className="col">
          <div className="card">
            <div className="card-body">
              Now Showing Page
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NowShowing;
