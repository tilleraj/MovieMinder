import axios from 'axios';

const baseUrl = 'https://localhost:44354';

const getAllMovies = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/Movie`)
    .then((result) => {
      resolve(result);
    })
    .catch((error) => {
      reject(error);
    });
});

const getMovieById = (movieId) => axios.get(`${baseUrl}/api/movie/${movieId}`);


export default {
  getAllMovies,
  getMovieById
}