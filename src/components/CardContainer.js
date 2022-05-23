import React, { useState, useEffect } from 'react';
import Card from './Card';
const CardContainer = ({cardArray, wasChosen}) => {

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center',
    flexWrap: 'wrap', width: '60%', margin: '0 auto'}}>
        {cardArray.map((card, cardIndex) => {
          return (
            <Card 
            id={cardIndex}
            key={cardIndex}
            cardImage={card.sprite}
            cardName={card.displayName}
            cardSpecies={card.species}
            cardQuotes={card.quotes}
            chosen={card.chosen} 
            wasChosen={wasChosen}
            />
          )
        })}
      </div>
    </div>
  );
};

export default CardContainer;
