import axios from 'axios';

export const POKEMONS_LIST = 'POKEMONS_LIST';

export const getPokemons = page => async dispatch => {
  try {
    const response = await axios.get(
      `http://localhost:5000/pokemon?_page=${page}&_limit=20`,
    );
    dispatch({
      type: POKEMONS_LIST,
      payload: response,
    });
  } catch (err) {
    console.log(err.message);
  }
};
