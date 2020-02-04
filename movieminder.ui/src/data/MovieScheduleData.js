import axios from 'axios';

const baseUrl = 'https://localhost:44354';

const getMovieScheduleByTmsId = (tmsId) => axios.get(`${baseUrl}/api/movieschedule/${tmsId}`);

export default {
  getMovieScheduleByTmsId
}