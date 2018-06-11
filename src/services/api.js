const request = require('superagent');
const BASE_URL = 'https://open-budget-server.herokuapp.com/api/rmanro/categories';

export const postCategory = category => {
  return request
    .post(BASE_URL)
    .send(category);
};

export const getCategories = () => {
  return request
    .get(BASE_URL);
};

export const deleteCategory = category => {
  return request
    .del(`${BASE_URL}/${category.id}`);
};