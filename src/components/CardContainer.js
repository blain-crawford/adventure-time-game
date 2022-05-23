import React, { useState, useEffect } from 'react';
import Card from './Card';
const CardContainer = ({cardArray}) => {
  return (
    <div>
      <h1>Is Card Container!</h1>
      <div style={{display: 'flex', justifyContent: 'center',
    flexWrap: 'wrap'}}>
        {cardArray.map((card, cardIndex) => {
          return (
            <Card 
            key={cardIndex}
            cardImage={card.sprite}
            cardName={card.displayName}
            cardSpecies={card.species}
            cardQuotes={card.quotes} 
            />
          )
        })}
      </div>
    </div>
  );
};

export default CardContainer;
