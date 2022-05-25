import React, { useState, useEffect } from 'react';
import adventureTimeFriends from './images/adventure-time-friends.jpeg';
import ReactAudioPlayer from 'react-audio-player';
import landingTheme from './music/landing-theme.mp3';
import {
  StyledLandingPage,
  StyledLandingPageImage,
  StyledStartButton,
} from './mui-styles/landingScreenStyles';
import './mui-styles/fonts.css';

const AdventureTimeLandingScreen = ({ playGame }) => {
  return (
    <StyledLandingPage id='opening-screen'>
      <StyledLandingPageImage
        src={adventureTimeFriends}
        alt='Adventure time with Finn and Jake'
      />
      <StyledStartButton
        onClick={playGame}
        id='start-game-button'
        className='adventure-font'
      >
        CLICK HERE TO START
      </StyledStartButton>
      <ReactAudioPlayer src={landingTheme} autoPlay/>
    </StyledLandingPage>
  );
};

export default AdventureTimeLandingScreen;
