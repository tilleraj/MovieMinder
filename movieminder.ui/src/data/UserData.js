import axios from 'axios';

const baseUrl = 'https://localhost:44354';

const getAllUsers = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/User`)
    .then((result) => {
      resolve(result.data);
    })
    .catch((error) => {
      reject(error);
    });
});

const getUserById = (userId) => axios.get(`${baseUrl}/api/user/${userId}`);


export default {
  getAllUsers,
  getUserById
}