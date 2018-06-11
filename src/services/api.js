const BASE_URL = 'https://open-budget-server.herokuapp.com/api/stephaniesmith/categories';

export const getCategories = () => {
  return fetch(`${BASE_URL}`, {
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET'
  })
    .then(res => res.json());
};

export const postCategory = category => {
  return fetch(`${BASE_URL}`, {
    body: JSON.stringify(category),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST'
  })
    .then(res => res.json());
};

export const putCategory = category => {
  return fetch(`${BASE_URL}/${category.id}`, {
    body: JSON.stringify(category),
    headers: {
      'content-type': 'application/json'
    },
    method: 'PUT'
  })
    .then(res => res.json());

};

export const deleteCategory = id => {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  })
    .then(res => res.json());
};

export const postExpense = (categoryId, expense) => {
  return fetch(`${BASE_URL}/${categoryId}/expenses`, {
    body: JSON.stringify(expense),
    method: 'POST'
  })
    .then(res => res.json());
};