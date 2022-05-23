import { maxWidth } from '@mui/system';
import React, { useState, useEffect } from 'react';
import adventureTimeFriends from './images/adventure-time-friends.jpeg';
import ReactAudioPlayer from 'react-audio-player';
import landingTheme from './music/landing-theme.mp3'

const AdventureTimeLandingScreen = ({playGame}) => {
  return (
    <div style={{ width: '100vw', height: '100vh',display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#703199' }}>
      <img
        src={adventureTimeFriends}
        style={{ width: '50%', height: '50%', margin: '0 auto' }}
      />
      <button onClick={playGame} style={{margin: '20px auto', padding: '5px 30px 5px 30px'}}>Play Game</button>
      {/* <ReactAudioPlayer 
        src={landingTheme}
        autoPlay
      /> */}
    </div>
  );
};

export default AdventureTimeLandingScreen;
