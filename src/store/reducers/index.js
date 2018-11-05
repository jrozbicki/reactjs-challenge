import { combineReducers } from 'redux';
import PokemonListReducer from './reducer_pokemon_list';

export default combineReducers({
  pokemons: PokemonListReducer,
});
