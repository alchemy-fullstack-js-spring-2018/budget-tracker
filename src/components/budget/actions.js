import { BUDGET_LOAD, BUDGET_ADD, BUDGET_UPDATE, BUDGET_REMOVE } from './reducers';
import shortid from 'shortid';

const budget = () => [
  addLineItem({ 
    date: new Date('12/04/2018'),
    description: 'paycheck',
    amount: 500.34,
    categoryId: 1
  }).payload,
  addLineItem({
    date: new Date('12/30/2018'),
    description: 'rent',
    amount: -435.89,
    categoryId: 1
  }).payload,
  addLineItem({
    date: new Date('01/01/2019'),
    description: 'bonus',
    amount: 1000.00,
    categoryId: 1
  }).payload
];

export const loadBudget = () => ({
  type: BUDGET_LOAD,
  payload: budget()
});

export const addLineItem = lineItem => {
  lineItem.id = shortid.generate();
  lineItem.date = lineItem.date ? lineItem.date : new Date();

  return {
    type: BUDGET_ADD,
    payload: lineItem
  };
};

export const updateLineItem = lineItem => ({
  type: BUDGET_UPDATE,
  payload: lineItem
});

export const removeLineItem = lineItem => ({
  type: BUDGET_REMOVE,
  payload: lineItem
});