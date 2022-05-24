import React, { useState } from 'react';
import { StyledCard, StyledBackOfCard } from './mui-styles/cardStyles';
import './mui-styles/fonts.css';
import './mui-styles/flip.css'

const CardBack = ({ cardName, id }) => {
  return (
    <StyledCard id={id} className='flip-back'>
      <StyledBackOfCard />
    </StyledCard>
  );
};

export default CardBack;
