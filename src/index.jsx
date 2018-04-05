import { render } from 'react-dom';
import React from 'react';
import { configure } from 'mobx';

import App from 'src/App.jsx';
// eslint-disable-next-line no-unused-vars
import style from 'assets/css/main.scss';


configure({
  computedRequiresReaction: true,
  enforceActions: true
});

render(<App />, document.getElementById('app'));
