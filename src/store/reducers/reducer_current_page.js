import { CURRENT_PAGE } from '../actions';

export default (state = 1, action) => {
  switch (action.type) {
    case CURRENT_PAGE:
      return action.payload;
    default:
      return state;
  }
};
