import axios from 'axios';
import { BASE_URI, LIMIT } from '../../config';

export const POKEMONS_LIST_REQUESTED = 'POKEMONS_LIST_REQUESTED';
export const POKEMONS_LIST_FAILED = 'POKEMONS_LIST_FAILED';
export const POKEMONS_LIST_DONE = 'POKEMONS_LIST_DONE';

export function getPokemonsRequested() {
  return {
    type: POKEMONS_LIST_REQUESTED,
  };
}

export function getPokemonsFailed(err) {
  return {
    type: POKEMONS_LIST_FAILED,
    payload: err,
  };
}

export function getPokemonsDone(data) {
  return {
    type: POKEMONS_LIST_DONE,
    payload: data,
  };
}

export const getPokemons = page => async (dispatch) => {
  try {
    dispatch(getPokemonsRequested());
    const response = await axios.get(
      `${BASE_URI}/pokemon?_page=${page}${LIMIT}`,
    );
    dispatch(getPokemonsDone(response.data));
  } catch (err) {
    dispatch(getPokemonsFailed(err));
  }
};
