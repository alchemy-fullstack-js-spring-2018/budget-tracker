import shortid from 'shortid';

// const key = 'categories';
let data;

// if(window) {
//   window.onbeforeunload = () => {
//     window.localStorage.setItem(key, JSON.stringify(categories));
//   };
  
//   data = window.localStorage.getItem(key);
// }

const categories = (data && data !== 'undefined') ? JSON.parse(data) : initCategories();

export default categories;

function initCategories() {
  return [{
    id: shortid.generate(),
    name: 'Meat',
    budget: 50, 
    expenses: [
      { id: shortid.generate(), text: '30% total expense' },
      { id: shortid.generate(), text: '20% total expense' }
    ]
  }, { 
    id: shortid.generate(),
    name: 'Produce', 
    budget: 40,
    expenses: [
      { id: shortid.generate(), text: '30% total expense' },
    ] 
  }, { 
    id: shortid.generate(),
    name: 'Entertainment', 
    budget: 10, 
    expenses: [
      { id: shortid.generate(), text: '30% total expense' },
    ]
  }];
}