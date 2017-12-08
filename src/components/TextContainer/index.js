import React, { Component } from 'react';
import Card from '../Card'
import './TextContainer.css';
import ToDoContainer from '../../containers/ToDoContainer.js';

class TextContainer extends Component {
  render() {   
    const mappedIdeas = this.props.toDos.map((idea, i) => (
      <Card {...idea} key={idea.id} />
    )) || [];

    return (
      <div className='lower-section'>
        <div className='text-container'>
          { mappedIdeas }
        </div>
      </div>
    )
  }
}

export default ToDoContainer(TextContainer);