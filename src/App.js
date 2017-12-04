import React, { Component } from 'react';
import {Provider,  connect } from 'react-redux';
import Form from './components/form';
import { createStore } from 'redux';
import ArrowButton from './components/arrow-button';
import Canvas from './components/canvas';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Canvas store={this.props} />
      <Form store={this.props} />
        <ArrowButton keyName="D" />
        <ArrowButton keyName="F" />
        <ArrowButton keyName="J" />
        <ArrowButton keyName="K" />
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);


