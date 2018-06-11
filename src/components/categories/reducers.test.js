import { categories, CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_REMOVE, CATEGORY_UPDATE } from './reducers';

it('has a default value of empty array', () => {
  const state = categories(undefined, {});
  expect(state).toEqual([]);
});

const category1 = {
  id: 1,
  name: 'Meat',
  timestamp: '11/15/1990',
  budget: 50
};

const category2 = {
  id: 2,
  name: 'Produce',
  timestamp: '6/10/2018',
  budget: 60
};

it('loads category', () => {
  const state = categories([], { type:CATEGORIES_LOAD, payload: [category1, category2] });
  expect(state).toEqual([category1, category2]);
});

it('add a category', () => {
  const prevState = [];
  const state = categories(prevState, { type: CATEGORY_ADD, payload: category2 });
  expect(state).toEqual([category2]);
  expect(state).not.toBe(prevState);
});

it('removes a category', () => {
  const state = categories([category1, category2], {  type: CATEGORY_REMOVE, payload: category2  });
  expect(state).toEqual([category1]);
});

it('updates a category', () => {
  const state = categories([{ id: 1, name: 'Meat', timestamp: '11/15/1990', budget: 50 }],
    {
      type: CATEGORY_UPDATE,
      payload: { id: 1, name: 'Meat', timestamp: '11/15/1990', budget: 30 }
    }
  );
  expect(state).toEqual([{ id: 1, name: 'Meat', timestamp: '11/15/1990', budget: 30 }]);

});