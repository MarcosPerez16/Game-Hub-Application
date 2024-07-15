//tried to create an .env file for this and store the key but it messed up the entire project
//can come back and try it again

import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'c7d311696b5a4ed5ba6d188259fbca0c',
  },
});
