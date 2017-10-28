import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import App from './App.js';
import reducers from './store/reducers';

const composeArray = []
/** works only with chrome which has installed extension. */
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  composeArray.push(window.__REDUX_DEVTOOLS_EXTENSION__())
}
const store = createStore(
  reducers,
  compose(...composeArray)
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('#root'));

