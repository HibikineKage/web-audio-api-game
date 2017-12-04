import React from 'react';
import { connect } from 'react-redux';
import Form from './components/form';
import ArrowButton from './components/arrow-button';
import Canvas from './components/canvas';
import './App.css';


function App(props) {
  return (
    <div className="App">
      <Canvas store={props} />
      <Form store={props} />
      <ArrowButton keyName="D" />
      <ArrowButton keyName="F" />
      <ArrowButton keyName="J" />
      <ArrowButton keyName="K" />
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
