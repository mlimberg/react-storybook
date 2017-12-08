import React from 'react';

const Card = ({ title, body, id }) => {
  return (
    <div key={ id }>
      <h2>{ title }</h2>
      <p>{ body }</p>
    </div>
  )
}

export default Card;