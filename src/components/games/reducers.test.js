import {
    games,
    GAMES_LOAD
} from './reducers';

it('it has a default value of empty array', () => {
    const state = games(undefined, {});
    expect(state).toEqual([]);
}); 