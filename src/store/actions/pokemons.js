import axios from 'axios';
import { BASE_URI } from '../../config';

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

export const getPokemons = (page, limit) => async (dispatch) => {
  try {
    dispatch(getPokemonsRequested());
    const response = await axios.get(
      `${BASE_URI}/pokemon?_page=${page}&_limit=${limit}`,
    );
    dispatch(getPokemonsDone(response));
  } catch (err) {
    dispatch(getPokemonsFailed(err));
  }
};

export const getPokemonByName = searchTerm => async (dispatch) => {
  try {
    dispatch(getPokemonsRequested());
    const response = await axios.get(
      `${BASE_URI}/pokemon?name_like=${searchTerm}`,
    );
    dispatch(getPokemonsDone(response));
  } catch (err) {
    dispatch(getPokemonsFailed(err));
  }
};
