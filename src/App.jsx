import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'mobx-react';

import HelloWorldContainer from 'src/containers/HelloWorldContainer.jsx';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HelloWorldContainer} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default hot(module)(App);
