import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import reducers from './store/reducers';

import Home from './containers/Home';
import ShowError from './components/ShowError';
import './styles/styles.scss';

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

const store = createStoreWithMiddleware(
  reducers,
  /* eslint-disable no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  /* eslint-disable react/jsx-filename-extension */
  <Provider store={store}>
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
