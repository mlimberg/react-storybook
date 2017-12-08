import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import TextContainer from '../TextContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }

    this.submitNewText = this.submitNewText.bind(this);
  }

  submitNewText(idea) {
    
    const ideas = [...this.state.ideas, idea];

    this.setState({ ideas })
  }

  render() {
    return (
      <div className="App">
        <Header submitText={ this.submitNewText } />
        <TextContainer ideas={ this.state.ideas } />
      </div>
    );
  }
}

export default App;
