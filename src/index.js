import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import saga from 'redux-saga';
import './index.css';
import reducer from './reducer/reducer';

const store = createStore(reducer, applyMiddleware(
  thunk,
  logger,
  saga,
));

window.onload = () => {
  
}
