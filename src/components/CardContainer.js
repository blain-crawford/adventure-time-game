import React, { useState, useEffect } from 'react';
import Card from './Card';
import CardBack from './CardBack';
import './mui-styles/flip.css';

const CardContainer = ({ cardArray, wasChosen }) => {
  const [flipped, setFlipped] = useState(true);

  const flipCards = () => {
    setFlipped((flipped) => !flipped);
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          width: '60%',
          margin: '0 auto',
        }}
      >
        {cardArray.map((card, cardIndex) => {
          if (flipped) {
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
                flipCards={flipCards}
              />
            );
          } else if (!flipped) {
            return (
              <CardBack
                className='c'
                id={cardIndex}
                key={cardIndex}
                cardName={card.displayName}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default CardContainer;
