import React, { useState, useEffect } from 'react';
import adventureTimeLoading from './images/adventure-time-logo-8bit.png';
import {
  StyledLoadingPage,
  StyledLoadingPageImage,
  StyledLoadingDiv,
  StyledLoadingFont,
  StyledLoadingDot1,
  StyledLoadingDot2,
  StyledLoadingDot3,
} from './mui-styles/loadingScreenStyles';
import './mui-styles/fonts.css';

const AdventureTimeLoadingScreen = ({ playGame, screen }) => {
  return (
    <StyledLoadingPage id='opening-screen'>
      <StyledLoadingPageImage
        src={adventureTimeLoading}
        alt='Adventure time with Finn and Jake'
      />
      <StyledLoadingDiv>
        <StyledLoadingFont className='adventure-font'>
          Loading your cards Bro!
        </StyledLoadingFont>
        <div style={{display: 'flex', flexDirection: 'row', }}>
          <StyledLoadingDot1></StyledLoadingDot1>
          <StyledLoadingDot2></StyledLoadingDot2>
          <StyledLoadingDot3></StyledLoadingDot3>
        </div>
      </StyledLoadingDiv>
    </StyledLoadingPage>
  );
};

export default AdventureTimeLoadingScreen;
