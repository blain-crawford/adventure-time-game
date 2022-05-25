/* eslint-disable react/prop-types */
import React from 'react';
import {
  StyledCard,
  StyledInnerCard,
  StyledCardHeader,
  StyledCardImage,
  StyledCardContent,
  StyledCardText,
} from './mui-styles/cardStyles';
import './mui-styles/fonts.css';
import './mui-styles/flip.css';
const Card = ({
  cardImage,
  cardName,
  cardSpecies,
  cardQuotes,
  chosen,
  wasChosen,
  id,
  flipCards,
}) => {
  return (
    <StyledCard
      className='flip'
      id={id}
      chosen={chosen}
      onClick={(e) => {
        setTimeout(flipCards, 1000);
        flipCards();
        setTimeout(wasChosen(e.currentTarget.id), 5000);
      }}
    >
      <StyledInnerCard>
        <StyledCardHeader>
          <StyledCardText
            style={{ padding: '0', margin: '0' }}
            className='adventure-font'
            component='div'
          >
            {cardName}
          </StyledCardText>
        </StyledCardHeader>
        <StyledCardImage
          component='img'
          height='200'
          image={cardImage}
          alt={cardName}
        />
        <StyledCardText className='card-font'>{cardSpecies}</StyledCardText>
        <StyledCardContent>
          <StyledCardText className='card-font'>
            {cardQuotes[Math.floor(Math.random() * cardQuotes.length)]}
          </StyledCardText>
        </StyledCardContent>
      </StyledInnerCard>
    </StyledCard>
  );
};

export default Card;
