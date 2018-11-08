import {
  getPokemonsRequested,
  POKEMONS_LIST_REQUESTED,
  getPokemonsFailed,
  POKEMONS_LIST_FAILED,
  getPokemonsDone,
  POKEMONS_LIST_DONE,
} from '../store/actions/pokemons';

describe('actions', () => {
  it('should create an action for pokemons request start', () => {
    const expectedAction = { type: POKEMONS_LIST_REQUESTED };
    expect(getPokemonsRequested()).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('should create an action for pokemons request fail', () => {
    const err = 'Some error';
    const expectedAction = { type: POKEMONS_LIST_FAILED, payload: err };
    expect(getPokemonsFailed(err)).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('should create an action for pokemons request sucess', () => {
    const data = 'Some data';
    const expectedAction = { type: POKEMONS_LIST_DONE, payload: data };
    expect(getPokemonsDone(data)).toEqual(expectedAction);
  });
});
