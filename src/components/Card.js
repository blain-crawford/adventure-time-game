import React, { useState, useEffect } from 'react';
import {
  StyledCard,
  StyledInnerCard,
  StyledCardHeader,
  StyledCardImage,
  StyledCardContent,
  StyledCardText,
} from './mui-styles/cardStyles';
import { Typography } from '@mui/material';
import './mui-styles/fonts.css';

const Card = ({
  cardImage,
  cardName,
  cardSpecies,
  cardQuotes,
  chosen,
  wasChosen,
  id
}) => {

  useEffect(() => {
    console.log('it\'s working!')
  }, [chosen])
  
  return (
    <StyledCard
      id={id}
      chosen={chosen}
      onClick={(e) => {
        wasChosen(e.currentTarget.id);
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
