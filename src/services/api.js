import request from 'superagent';

const baseURL = 'https://budget-tracker-server.herokuapp.com/api/keli/categories';

export const getCategories = () => {
  return request.get(baseURL)
    .then(({ body }) => body);
};

export const postCategory = category => {
  return request.post(baseURL)
    .send(category)
    .then(({ body }) => body);
};

export const putCategory = category => {
  return request.put(`${baseURL}/${category.id}`)
    .send(category)
    .then(({ body }) => body);
};

export const deleteCategory = id => {
  return request.delete(`${baseURL}/${id}`)
    .then(({ deleted }) => deleted);
};

export const postExpense = (categoryId, expense) => {
  return request.post(`${baseURL}/${categoryId}/expenses`)
    .send(expense)
    .then(({ body }) => body);
};