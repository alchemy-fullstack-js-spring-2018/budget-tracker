import shortid from 'shortid';
import Categories from './categories';

export const getCategories = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Categories.map(c => ({ ...c, expenses: [{ ...c.expenses }] })));
    }, 500);
  });
};

export const postCategory = category => {

  const newCategory = {
    ...category,
    id: shortid.generate(),
    timestamp: new Date(),
    expenses: []
  };
  Categories.push(newCategory);
  return Promise.resolve(newCategory);
};

export const putCategory = category => {
  let index = Categories.findIndex(c => c.id === category.id);
  if(index === -1) index = Categories.length = 1;
  const updated = { ...category };
  Categories.splice(index, 1, updated);
  return Promise.resolve(updated);
};

export const deleteCategory = id => {
  let index = Categories.findIndex(c => c.id === id);
  if(index === -1) return;
  Categories.splice(index, 1);
  return Promise.resolve({ removed: true });
};

export const postExpense = (categoryId, expense) => {
  let category = Categories.find(c => c.id === categoryId);
  if(!category) return;

  const newExpense = {
    ...expense,
    id: shortid.generate(),
    timestamp: new Date()
  };

  category.expenses.push(newExpense);
  return Promise.resolve(newExpense);
};