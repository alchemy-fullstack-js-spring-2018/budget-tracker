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
    name: 'budget1', 
    budget: '3,000',
    expenses: [
      { id: shortid.generate(), text: '30.00' },
      { id: shortid.generate(), text: '20.00' }
    ]
  }, { 
    id: shortid.generate(),
    name: 'budget2', 
    budget: '2,000', 
    expenses: [] 
  }, { 
    id: shortid.generate(),
    name: 'budget3', 
    budget: '4,000', 
    expenses: []
  }];
}
