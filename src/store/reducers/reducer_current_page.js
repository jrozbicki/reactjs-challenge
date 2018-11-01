import { CURRENT_PAGE } from '../actions/pokemons';

export default (state = 1, action) => {
  switch (action.type) {
    case CURRENT_PAGE:
      return action.payload;
    default:
      return state;
  }
};
