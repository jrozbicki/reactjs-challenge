import { observable, runInAction, action, flow } from 'mobx';
import axios from 'axios';
import { BASE_URI } from '../config';

export const PENDING = 'PENDING';
export const DONE = 'DONE';
export const ERROR = 'ERROR';

class PokemonStore {
  @observable pokemons = [];

  @observable total = '';

  @observable loadingState = PENDING;

  @action.bound
  async fetchPokemons(page, limit) {
    this.loadingState = PENDING;
    try {
      const response = await axios.get(`${BASE_URI}/pokemon?_page=${page}&_limit=${limit}`);
      runInAction(() => {
        this.total = response.headers['x-total-count'];
        this.pokemons = response.data;
        this.loadingState = DONE;
      });
    } catch (err) {
      runInAction(() => {
        this.loadingState = ERROR;
        console.log(err.message);
      });
    }
  }

  /* eslint-disable func-names */
  @action.bound
  fetchPokemonByName = flow(function*(searchTerm, limit) {
    this.loadingState = PENDING;
    try {
      const response = yield axios.get(`${BASE_URI}/pokemon?name_like=${searchTerm}&_limit=${limit}`);
      this.total = response.headers['x-total-count'];
      this.pokemons = response.data;
      this.loadingState = DONE;
    } catch (err) {
      this.loadingState = ERROR;
      console.log(err);
    }
  });
}

export default PokemonStore;
