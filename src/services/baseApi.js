import axios from 'axios';

export default axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mueqbgIzWoYtEKZ7X0JO',
  headers: {
    'Content-type': 'application/json',
  },
});
