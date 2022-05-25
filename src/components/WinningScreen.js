import React, { useState, useEffect } from 'react';
import {
  StyledWinningPage,
  StyledStartButton,
} from './mui-styles/winningScreenStyles';
import './mui-styles/fonts.css';

const WinningScreen = ({ returnToTitle }) => {
  return (
    <StyledWinningPage id='opening-screen'>
      <StyledStartButton
        onClick={returnToTitle}
        id='return-to-title-button'
        className='adventure-font'
      >
        CLICK HERE TO PLAY AGAIN
      </StyledStartButton>
    </StyledWinningPage>
  );
};

export default WinningScreen;
