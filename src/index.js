import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';

import Home from './containers/Home';
import ShowError from './components/ShowError';
import PokemonStore from './stores/PokemonStore';
import './styles/styles.scss';

const pokemonStore = new PokemonStore();
ReactDOM.render(
  /* eslint-disable react/jsx-filename-extension */
  <Provider pokemonStore={pokemonStore}>
    <BrowserRouter>
      <Switch>
        <Route path="/pokemons/:page" component={Home} />
        <Route exact path="/" component={Home} />
        <Route component={ShowError} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
