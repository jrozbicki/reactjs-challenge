import { combineReducers } from 'redux';
import PokemonListReducer from './reducer_pokemon_list';
import CurrentPageReducer from './reducer_current_page';

export default combineReducers({
  pokemons: PokemonListReducer,
  currentPage: CurrentPageReducer,
});
