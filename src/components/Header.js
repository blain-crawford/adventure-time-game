/* eslint-disable react/prop-types */
import React from 'react';
import {
  StyledTitleButton,
  StyledHeader,
  StyledScore,
} from './mui-styles/headerStyles';

const Header = ({ score, returnToTitle }) => {
  return (
    <StyledHeader>
      <StyledScore className='card-font'>Score: {score}</StyledScore>
      <StyledTitleButton
        id='return-to-title-button'
        className='adventure-font'
        onClick={returnToTitle}
      >
        Return to Title
      </StyledTitleButton>
    </StyledHeader>
  );
};

export default Header;
