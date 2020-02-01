import axios from 'axios';

const baseUrl = 'https://localhost:44354';

const getAllUserMovies = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/UserMovie`)
    .then((result) => {
      resolve(result);
    })
    .catch((error) => {
      reject(error);
    });
});

const getUserMovieById = (userMovieId) => axios.get(`${baseUrl}/api/userMovie/${userMovieId}`);
const getAllUserMoviesWithMovieDataByUser = (userId) => axios.get(`${baseUrl}/api/userMovie/user/${userId}`);

export default {
  getAllUserMovies,
  getUserMovieById,
  getAllUserMoviesWithMovieDataByUser
}