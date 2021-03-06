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

const postMovie = (newMovie, searchResult) => new Promise((resolve, reject) => {
  let movie = searchResult;
  let newMovieWithData = newMovie;
  if (movie.releaseDate.length > 8 && newMovie.releaseDate === "") {
    newMovieWithData.releaseDate = movie.releaseDate;
  }
  if (newMovie.posterURL === "") {
    newMovieWithData.posterURL = movie.imageUrl;
  }
  if (movie.title !== "") {
    newMovieWithData.title = movie.title;
  }
  axios.post(`${baseUrl}/api/movie`, newMovieWithData)
    .then((response) => {
      resolve(response.data);
    })
    .catch(err => reject(err));
});

const searchMovieByTitle = title => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/schedule/search/${title}`)
    .then((response) => {
      resolve(response.data);
    })
    .catch(err => reject(err));
});

const updateMovie = (movieId, updatedMovie) => axios.put(`${baseUrl}/api/movie/${movieId}`, updatedMovie);


export default {
  getAllMovies,
  getMovieById,
  postMovie,
  searchMovieByTitle,
  updateMovie
}