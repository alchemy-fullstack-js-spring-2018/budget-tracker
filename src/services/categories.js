import shortid from 'shortid';

const key = 'categories';
let data;

if(window) {
  window.onbeforeunload = () => {
    window.localStorage.setItem(key, JSON.stringify(categories));
  };

  data = window.localStorage.getItem(key);
}

const categories = (data && data !== 'undefined') ? JSON.parse(data) : initCategories();

export default categories;

function initCategories() {
  return [{
    id: shortid.generate(),
    name: 'category',
    budget: '$50',
    expenses: [
      { id: shortid.generate(), text: 'money' },
      { id: shortid.generate(), text: 'money2' }
    ]
  }, {
    id: shortid.generate(),
    name: 'category1',
    budget: '$40',
    expense: []
  }, {
    id: shortid.generate(),
    name: 'category2',
    budget: '$50',
    expense: []
  }];
}