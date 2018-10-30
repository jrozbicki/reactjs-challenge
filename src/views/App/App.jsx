import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Home from '../Home';
import './App.scss';
import './reset.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/page/:page" component={Home} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
