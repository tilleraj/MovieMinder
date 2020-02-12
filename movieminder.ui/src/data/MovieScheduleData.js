import axios from 'axios';

const baseUrl = 'https://localhost:44354';

const getConciseMovieSchedule = (startDate, zip) => axios.get(`${baseUrl}/api/schedule/${startDate}/${zip}/concise`);
const getMovieScheduleByTmsId = (startDate, zip, tmsId) => axios.get(`${baseUrl}/api/schedule/${startDate}/${zip}/${tmsId}`);

export default {
  getConciseMovieSchedule,
  getMovieScheduleByTmsId
}