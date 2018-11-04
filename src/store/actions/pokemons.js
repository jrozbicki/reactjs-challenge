import axios from 'axios';
import { BASE_URI, LIMIT } from '../../config';

export const POKEMONS_LIST_REQUESTED = 'POKEMONS_LIST_REQUESTED';
export const POKEMONS_LIST_FAILED = 'POKEMONS_LIST_FAILED';
export const POKEMONS_LIST_DONE = 'POKEMONS_LIST_DONE';
export const CURRENT_PAGE = 'CURRENT_PAGE';

export function setCurrentPage(page) {
  const number = parseInt(page, 10);
  return {
    type: CURRENT_PAGE,
    payload: number,
  };
}

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
      `${BASE_URI}pokemon?_page=${page}${LIMIT}`,
    );
    dispatch(getPokemonsDone(response.data));
    dispatch(setCurrentPage(page));
  } catch (err) {
    dispatch(getPokemonsFailed(err));
  }
};
