import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import manageUsers from './reducers/manageUsers'


// add imports and code
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(manageUsers);



ReactDOM.render(
  <Provider store={store}>
  <App store={store} />
  </Provider>
  ,
  document.getElementById('root')
);
