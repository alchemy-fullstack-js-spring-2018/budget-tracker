import request from 'superagent';

const baseURL = 'https://open-budget-server.herokuapp.com/api/keli/categories/';

export const getCategories = () => {
  return request.get(baseURL)
    .then(({ body }) => body);
};