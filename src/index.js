import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import saga from 'redux-saga';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducer/reducer';

const store = createStore(reducer, applyMiddleware(
  thunk,
  logger,
  saga,
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
