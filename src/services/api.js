import shortid from 'shortid';
import categories from './categories';

export const getCategories = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(categories.map(c => ({ ...c, expenses: [...c.expenses] })));
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
  categories.push(newCategory);
  return Promise.resolve(newCategory);
};

export const putCategory = category => {
  let index = categories.findIndex(c => c.id === category.id);
  if(index === -1) index = categories.length = 1;
  const updated = { ...category };
  categories.splice(index, 1, updated);
  return Promise.resolve(updated);
};

export const deleteCategory = id => {
  let index = categories.findIndex(c => c.id === id);
  if(index === -1) return;
  categories.splice(index, 1);
  return Promise.resolve({ removed: true });
};

export const postExpense = (categoryId, expense) => {
  let category = categories.find(c => c.id === categoryId);
  if(!category) return;

  const newExpense = {
    ...expense,
    id: shortid.generate(),
    timestamp: new Date()
  };

  category.expenses.push(newExpense);
  return Promise.resolve(newExpense);
};