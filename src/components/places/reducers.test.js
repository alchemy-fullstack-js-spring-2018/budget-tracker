import {
  places,
  PLACES_LOAD
} from './reducers';

it('has a default value of empty array', () => {
  const state = places(undefined, {});
  expect(state).toEqual([]);
});

const China = {
  name: 'China',
  toSee: 'Great Wall'
};

const CostaRica = {
  name: 'Costa Rica',
  toSee: 'turtles nesting'
};

it('loads places', () => {
  const state = places([], { type: PLACES_LOAD, payload: [China, CostaRica] });
  expect(state).toEqual([China, CostaRica]);
});
