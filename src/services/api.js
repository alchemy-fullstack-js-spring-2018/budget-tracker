import shortid from 'shortid';
import categories from './categories';

export const getCategories = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(categories.map(f => ({ ...f, expenses: [...f.expenses] })));
    }, 500);
  });
};

export const postCategory = category => {
  // return Promise.reject({
  //   message: 'fruit stand is closed'
  // });

  const newCategory = {
    ...category,
    id: shortid.generate(),
    timestamp: new Date(),
    expenses: []
  };
  categories.push(newCategory);
  return Promise.resolve(newCategory);
};

export const putCategory = category => {
  let index = categories.findIndex(f => f.id === category.id);
  if(index === -1) index = categories.length = 1;
  const updated = { ...category };
  categories.splice(index, 1, updated);
  return Promise.resolve(updated);
};

export const deleteCategory = id => {
  let index = categories.findIndex(f => f.id === id);
  if(index === -1) return;
  categories.splice(index, 1);
  return Promise.resolve({ removed: true });
};

export const postExpense = (categoryId, expense) => {
  let category = categories.find(f => f.id === categoryId);
  if(!category) return;

  const newExpense = {
    ...expense,
    id: shortid.generate(),
    timestamp: new Date()
  };

  category.expenses.push(newExpense);
  return Promise.resolve(newExpense);
};