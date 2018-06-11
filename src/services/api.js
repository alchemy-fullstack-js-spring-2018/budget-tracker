const request = require('superagent');
const BASE_URL = 'https://open-budget-server.herokuapp.com/api/rmanro/categories';

export const postCategory = category => {
  return request
    .post(BASE_URL)
    .send(category);
};