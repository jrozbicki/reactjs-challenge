import { POKEMONS_LIST_REQUESTED, POKEMONS_LIST_DONE, POKEMONS_LIST_FAILED } from '../actions/pokemons';

const initialState = {
  data: [],
  isLoading: false,
  isError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POKEMONS_LIST_REQUESTED:
      return { ...state, isLoading: true };
    case POKEMONS_LIST_DONE:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        total: action.payload.headers['x-total-count'],
      };
    case POKEMONS_LIST_FAILED:
      return { ...state, isLoading: false, isError: action.payload };
    default:
      return state;
  }
};
