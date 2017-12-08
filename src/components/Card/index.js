import React from 'react';
import './Card.css';

const Card = ({ title, body, id }) => {
  return (
    <div className='card'>
      <h2 className='card-title'>{ title }</h2>
      <p className='card-body'>{ body }</p>
    </div>
  )
}

export default Card;