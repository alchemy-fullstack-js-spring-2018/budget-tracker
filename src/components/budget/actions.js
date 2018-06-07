import { BUDGET_LOAD, BUDGET_ADD, BUDGET_UPDATE, BUDGET_REMOVE } from './reducers';
import shortid from 'shortid';

const paycheck = {
    date: new Date('12/04/2018'),
    description: 'paycheck',
    amount: 500.34
  };
  
  const rent = {
    date: new Date('06/30/2018'),
    description: 'rent',
    amount: -435.89
  };