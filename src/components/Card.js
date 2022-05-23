import React, { useState, useEffect } from 'react';
import {
  StyledCard,
  StyledCardImage,
  StyledCardContent,
} from './mui-styles/cardStyles';
import { Typography } from '@mui/material';

const Card = ({ cardImage, cardName, cardSpecies, cardQuotes }) => {
  return (
    <StyledCard>
      <StyledCardImage component='img' image={cardImage} alt={cardName} />
      <StyledCardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {cardName}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {cardQuotes[0]}
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
};

export default Card;
