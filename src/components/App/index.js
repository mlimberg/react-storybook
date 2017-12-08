import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import TextContainer from '../TextContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TextContainer />
      </div>
    );
  }
}

export default App;
