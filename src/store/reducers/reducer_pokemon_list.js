import { POKEMONS_LIST } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case POKEMONS_LIST:
      return action.payload.data;

    default:
      return state;
  }
};
