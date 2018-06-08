import {
  categories,
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_REMOVE,
  CATEGORY_UPDATE
} from './reducers';

it('Has a Default Value of Empty Array', () => {
  const state = categories(undefined, {});
  expect(state).toEqual([]);
});

const dreamTrip = {
  id: 1,
  timestamp: new Date(),
  name: 'Trip to Copenhagen',
  budget: 5000
};

const dreamHouse = {
  id: 2,
  timestamp: new Date(),
  name: 'Big Apartment',
  budget: 100000
};

it('Loads Categories', () => {
  const state = categories([], { type: CATEGORIES_LOAD, payload: [dreamTrip, dreamHouse] });
  expect(state).toEqual([dreamTrip, dreamHouse]);
});

it('Add a Category', () => {
  const prevState = [];
  const state = categories(prevState, { type: CATEGORY_ADD, payload: dreamHouse });
  expect(state).toEqual([dreamHouse]);
  expect(state).not.toBe(prevState);
});

it('Removes a Category', () => {
  const state = categories([dreamHouse, dreamTrip], { type: CATEGORY_REMOVE, payload: dreamHouse });
  expect(state).toEqual([dreamTrip]);
});

it('Updates a Category', () => {
  const state = categories(
    [{ id: 1, name: 'Perfect Job', budget: 500 }],
    {
      type: CATEGORY_UPDATE,
      payload: { id: 1, name: 'Perfect Job', budget: 1000 }
    }
  );
  expect(state).toEqual([{ id: 1, name: 'Perfect Job', budget: 1000 }]);
});