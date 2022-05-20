import { maxWidth } from '@mui/system';
import React, { useState, useEffect } from 'react';
import adventureTimeFriends from './images/adventure-time-friends.jpeg';

const AdventureTimeLandingScreen = ({playGame}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <img
        src={adventureTimeFriends}
        style={{ width: '50%', height: '50%', margin: '0 auto' }}
      />
      <button onClick={playGame} style={{width: '10%', margin: '20px auto'}}>Play Game</button>
    </div>
  );
};

export default AdventureTimeLandingScreen;
