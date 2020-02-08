import axios from 'axios';

const baseUrl = 'https://localhost:44354';

const getConciseMovieSchedule = (startDate) => axios.get(`${baseUrl}/api/schedule/${startDate}/concise`);
const getMovieScheduleByTmsId = (startDate, tmsId) => axios.get(`${baseUrl}/api/schedule/${startDate}/${tmsId}`);

export default {
  getConciseMovieSchedule,
  getMovieScheduleByTmsId
}