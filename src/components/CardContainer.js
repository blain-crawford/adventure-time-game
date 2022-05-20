import React, { useState, useEffect } from 'react';
import Card from './Card';
const CardContainer = ({cardArray}) => {
  return (
    <div>
      <h1>Is Card Container!</h1>
      {cardArray.map((card, cardIndex) => {
        return (
          <Card 
          key={cardIndex}
          cardImage={card.sprite} 
          />
        )
      })}
    </div>
  );
};

export default CardContainer;
