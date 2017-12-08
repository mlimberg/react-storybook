import React, { Component } from 'react';
import Card from '../Card'
import './TextContainer.css';

export default class TextContainer extends Component {
  render() {
    console.log(this.props.ideas)
    
    const mappedIdeas = this.props.ideas.map((idea, i) => (
      <Card {...idea} />
    )) || [];

    return (
      <div className='text-container'>
        { mappedIdeas }
      </div>
    )
  }
}