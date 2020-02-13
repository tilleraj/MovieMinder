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
const postMovie = newMovie => axios.post(`${baseUrl}/api/movie`, newMovie);
const searchMovieByTitle = title => axios.get(`${baseUrl}/api/schedule/search/${title}`)
const updateMovie = (movieId, updatedMovie) => axios.put(`${baseUrl}/api/movie/${movieId}`, updatedMovie);


export default {
  getAllMovies,
  getMovieById,
  postMovie,
  searchMovieByTitle,
  updateMovie
}