import axios from 'axios';

const baseUrl = 'https://localhost:44354/api/user';

const getAllUsers = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}`)
    .then((result) => {
      resolve(result);
    })
    .catch((error) => {
      reject(error);
    });
});

const getUserById = (userId) => axios.get(`${baseUrl}/${userId}`);
const getUserByFirebaseId = (firbaseUid) => axios.get(`${baseUrl}/uid/${firbaseUid}`);

const addUser = (user) => axios.post(baseUrl, user);

export default {
  addUser,
  getAllUsers,
  getUserById,
  getUserByFirebaseId
}