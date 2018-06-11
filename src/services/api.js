const BASE_URL = 'https://open-budget-server.herokuapp.com/api/stephaniesmith/categories';

export const getCategories = () => {
  return fetch(`${BASE_URL}`, {
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET'
  });
};

export const postCategory = category => {
  return fetch(`${BASE_URL}`, {
    body: JSON.stringify(category),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST'
  });
};

export const putCategory = category => {
  return fetch(`${BASE_URL}/${category.id}`, {
    body: JSON.stringify(category),
    headers: {
      'content-type': 'application/json'
    },
    method: 'PUT'
  });
};

export const deleteCategory = id => {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });
};

export const postLineItem = (categoryId, lineItem) => {
  return fetch(`${BASE_URL}/${categoryId}/lineItems`, {
    body: JSON.stringify(lineItem),
    method: 'POST'
  });
};